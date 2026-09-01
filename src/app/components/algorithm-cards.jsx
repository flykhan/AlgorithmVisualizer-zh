import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'



const algorithms = [
  {
    id: 'pathfinder',
    title: "寻路算法",
    description: "以动画演示 Dijkstra、BFS 与 DFS 等图算法",
    image: '/images/graph.png?height=200&width=300'
  },{
    id: 'graph',
    title: '图的遍历',
    description: "构建图，观察 BFS 与 DFS 逐节点遍历全部顶点",
    image: '/images/graph-traversal.png?height=200&width=300'
  },{
    id: 'shortest-path',
    title: '最短路径',
    description: "在带权图上运行 Dijkstra 与 Bellman-Ford 算法，并检测负环",
    image: '/images/shortest-path.png?height=200&width=300'
  },{
    id: 'mst',
    title: '最小生成树',
    description: "构建带权图，观察 Kruskal 与 Prim 算法生成最小生成树的过程",
    image: '/images/mst.png?height=200&width=300'
  },{
    id: 'connectivity',
    title: '连通性',
    description: "构建图，为连通分量与强连通分量着色",
    image: '/images/connectivity.png?height=200&width=300'
  },{
    id: 'network-flow',
    title: '网络流',
    description: "在带容量网络上，用 Edmonds-Karp 与 Ford-Fulkerson 算法求最大流与最小割",
    image: '/images/network-flow.png?height=200&width=300'
  },{
    id: 'bst',
    title: '二叉搜索树',
    description: "在普通二叉搜索树或红黑树上执行插入、删除与搜索，并以动画演示旋转与重着色",
    image: '/images/bst.png?height=200&width=300'
  },{
    id: 'binary-heap',
    title: '二叉堆',
    description: "最小堆：插入、取最小值、由数列建堆与堆排序，动画展示上浮与下沉",
    image: '/images/binary-heap.png?height=200&width=300'
  },
  {
    id: 'recursion-tree',
    title: '递归树',
    description: "函数直接或间接地调用自身，即为递归",
    image: '/images/recursion.jpg?height=200&width=300'
  },
  {
    id: 'sorting',
    title: '排序算法',
    description: "对比不同排序算法的执行过程",
    image: '/images/sort.png?height=200&width=300'
  },
  {
    id: 'recursive-sorting',
    title: '递归排序',
    description: "对比不同递归排序算法的执行过程",
    image: '/images/sort.png?height=200&width=300'
  },
  {
    id: 'n-queen',
    title: 'N 皇后',
    description: "N 皇后问题：在 N×N 棋盘上放置 N 个皇后，使任意两个都不互相攻击",
    image: '/images/queen.PNG?height=200&width=300'
  },
  {
    id: 'turing-machine',
    title: '图灵机',
    description: "图灵机是计算的数学模型，按规则表在纸带上操作符号",
    image: '/images/turing.jpg?height=200&width=300'
  },
  {
    id: 'prime-numbers',
    title: '素数',
    description: "可视化埃氏筛法，并说明它为何优于暴力枚举",
    image: '/images/primes.jpg?height=200&width=300'
  },
  {
    id: 'convex-hull',
    title: '凸包',
    description: "点集的凸包是包含其中所有点的最小凸多边形",
    image: '/images/convex-hull.png?height=200&width=300'
  },
  {
    id: 'binary-search',
    title: '二分查找',
    description: "二分查找是在有序列表中高效查找目标元素的算法",
    image: '/images/binary-search.png?height=200&width=300'
  },{
    id: 'game-of-life',
    title: '生命游戏',
    description: "可视化生命游戏这一元胞自动机",
    image: '/images/game-of-life.png?height=200&width=300'
  },{
    id: 'linked-list',
    title: '链表',
    description: "在单链表与双向链表上演示插入、删除、搜索与翻转",
    image: '/images/linked-list.png?height=200&width=300'
  },
  // {
  //   id: '15-puzzle',
  //   title: '15 Puzzle',
  //   description: "The 15-puzzle is a sliding puzzle that consists of a frame of numbered square tiles in random order with one tile missing",
  //   image: '/images/15puzzle.PNG?height=200&width=300'
  // }
]

export function AlgorithmCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {algorithms.map((algorithm) => (
        <Link key={algorithm.id} href={`/${algorithm.id}`} className="block group">
          <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
            <div className="relative h-48">
              <Image
                src={algorithm.image}
                alt={algorithm.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                {algorithm.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-lg text-muted-foreground">{algorithm.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

