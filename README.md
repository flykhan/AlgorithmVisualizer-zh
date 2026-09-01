![banner](Assets/banner.png)

# 算法可视化（Algorithm Visualizer 中文版）

用 React 构建的算法可视化工具，通过逐步动画直观展示 30+ 种算法的执行过程，让学习更简单、更直观。

> 本项目是 [TamimEhsan/AlgorithmVisualizer](https://github.com/TamimEhsan/AlgorithmVisualizer) 的中文翻译版，并新增了移动端适配。

**原作者原版**：[https://tamimehsan.github.io/AlgorithmVisualizer/](https://tamimehsan.github.io/AlgorithmVisualizer/)

## 本中文版特性

- 🌏 **全站界面中文化**：导航、菜单、按钮、描述、提示全部翻译为中文，算法专有名词（BFS / DFS / Dijkstra / Kruskal / Prim 等）保留标准英文术语
- 📱 **移动端适配**：窄屏下操作区自动移到底部、显示区占中上部，导航栏矮化；宽屏保持「菜单在左、显示在右」布局
- 🐛 **修复了原项目若干 bug**：
  - 生命游戏：相邻活细胞之间分隔线消失（黑描边盖住白线）
  - 生命游戏：网格溢出屏幕、无法自适应容器尺寸
  - 凸包：点全部挤在画布左上角（初始化时序问题）

## 已实现的算法（30+）

- **图搜索**：DFS、BFS、Dijkstra、A*、递归迷宫生成
- **数据结构**：链表（插入、删除、搜索、翻转 —— 单链表与双向链表）
- **树**：二叉搜索树（插入、删除、搜索，带动画重排）
- **图的遍历**：BFS、DFS
- **单源最短路径**：Dijkstra、Bellman-Ford
- **最小生成树**：Kruskal、Prim
- **连通性**：连通分量、强连通分量（Tarjan）、弱连通分量
- **网络流**：Edmonds-Karp、Ford-Fulkerson、最小割
- **排序**：冒泡排序、选择排序、插入排序、堆排序、归并排序、快速排序
- **素数**：埃拉托斯特尼筛法、阿基米德螺旋
- **N 皇后回溯**
- **凸包**：Graham 扫描
- **二分查找**
- **递归**：斐波那契、二项式系数、错排、快速幂、第二类斯特林数
- **图灵机**：按位取反、加一、二进制补码

## 本地运行

确保已安装 Node.js，然后执行：

```bash
npm i
npm run dev
```

应用将运行在 `http://localhost:3000`。

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `./build`（静态导出）。

## 技术栈

Next.js · React · Tailwind CSS · Radix UI · Lucide Icons · React Flow

## 致谢

本项目部分算法的灵感来源于以下资源，在此向原作者致谢：

- `Pathfinder`：[The Projects That Got Me Into Google](https://youtu.be/n4t_-NjY_Sg)
- `素数螺旋`：[Why do prime numbers make these spirals?](https://youtu.be/EK32jo7i5LQ)
- `递归树可视化`：[Recursion Tree Visualizer](https://github.com/brpapa/recursion-tree-visualizer)
- `图灵机`：[Tursi](https://github.com/schaetzc/tursi)

## 灵感来源（后续扩展方向）

- [University of San Francisco Site](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
- [algorithm-visualizer](https://github.com/algorithm-visualizer)
- [National University of Singapore Site](https://visualgo.net/en)

## License

继承原项目许可（MIT）。详情见 [LICENSE](LICENSE)。
