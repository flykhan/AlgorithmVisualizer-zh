# syntax=docker/dockerfile:1
#
# 算法可视化（中文版）—— 静态站点镜像
#
# 多阶段构建：先在 Node 阶段执行 Next.js 静态导出（output: 'export' -> build/），
# 再交给 nginx 提供静态文件。宿主机无需安装 Node.js。
#
# 构建： docker build -t flykhan/algoviz:latest .
# 运行： docker run -d -p 19090:80 --name algoviz flykhan/algoviz:latest

# ---------- 构建阶段 ----------
FROM node:20-alpine AS build

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# ---------- 运行阶段 ----------
FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="AlgorithmVisualizer-zh" \
      org.opencontainers.image.description="算法可视化（中文版）静态站点" \
      org.opencontainers.image.url="https://algoviz.example.com/" \
      org.opencontainers.image.source="https://github.com/flykhan/AlgorithmVisualizer-zh" \
      org.opencontainers.image.licenses="MIT"

RUN rm -f /etc/nginx/conf.d/default.conf
COPY deploy/nginx-container.conf /etc/nginx/conf.d/algoviz.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
