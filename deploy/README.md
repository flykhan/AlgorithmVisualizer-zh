# 部署说明 — algoviz.example.com

线上站点不再由宿主 nginx 直接读静态目录，而是**整站打包成 Docker 镜像**，服务器上以容器运行，
宿主 nginx 只负责 TLS 终结和反向代理。

| 项目 | 值 |
|---|---|
| 站点地址 | https://algoviz.example.com |
| 镜像 | `flykhan/algoviz:latest`（Docker Hub） |
| 容器名 / 端口 | `algoviz`，监听 `127.0.0.1:19090` → 容器 80 |
| 反向代理 | `/etc/nginx/sites-available/algovisualizer` → `sites-enabled/` 软链 |
| 证书 | `/etc/nginx/cert/cert.crt` + `private.key`（`*.example.com` 泛域名证书，acme.sh 自动续期） |
| 容器内配置 | `deploy/nginx-container.conf` |
| 宿主机 vhost | `deploy/nginx-algoviz.example.com.conf` |

## 镜像结构

`Dockerfile` 是多阶段构建，直接在本仓库根目录构建即可，无需在宿主机安装 Node.js：

1. `node:20-alpine` 阶段：`npm ci`，再 `npm run build`（Next.js `output: 'export'` 静态导出到 `build/`）；
2. `nginx:1.27-alpine` 阶段：把 `build/` 拷到 `/usr/share/nginx/html`，套用 `deploy/nginx-container.conf`。

宿主无需预装 Node/npm。

## 构建与发布

```bash
# 1) 构建
docker build -t flykhan/algoviz:latest .

# 2) 发布新版本
docker tag flykhan/algoviz:latest flykhan/algoviz:1.0.0
docker push flykhan/algoviz:1.0.0
docker push flykhan/algoviz:1.0
docker push flykhan/algoviz:latest
```

## 服务器更新

```bash
docker pull flykhan/algoviz:latest
docker rm -f algoviz
docker run -d --name algoviz --restart unless-stopped \
  -p 127.0.0.1:19090:80 flykhan/algoviz:latest
```

宿主 nginx 不需要 reload（只改了容器内容时）。

## 首次部署（服务器）

```bash
docker run -d --name algoviz --restart unless-stopped \
  -p 127.0.0.1:19090:80 flykhan/algoviz:latest

# vhost 从「直接 root 到静态目录」改为「proxy_pass 到 127.0.0.1:19090」
cp deploy/nginx-algoviz.example.com.conf /etc/nginx/sites-available/algovisualizer
ln -sf /etc/nginx/sites-available/algovisualizer /etc/nginx/sites-enabled/algovisualizer
nginx -t && nginx -s reload
```

## 行为说明

- 页面路由：`/sorting` → `sorting.html`（`try_files $uri $uri.html $uri/`）
- Next 构建产物：`/_next/static/` 强缓存 1 年（immutable）；图片等资源 30 天
- RSC 载荷：`/sorting.txt` 等 `.txt` 文件由静态服务直接返回
- 404：`error_page 404 /404.html`，容器返回自定义 404 页
- gzip、缓存头由容器内 nginx 负责

## 回滚

旧静态目录部署已删除，回滚通过历史镜像完成：

```bash
docker rm -f algoviz
docker run -d --name algoviz --restart unless-stopped \
  -p 127.0.0.1:19090:80 flykhan/algoviz:<旧版本>
```
