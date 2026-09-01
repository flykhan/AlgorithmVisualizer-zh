"use client";

import Navbar from "@/components/navbar";
import Footer from "../components/footer";
import { Code2, GitFork, Lightbulb, Layers } from "lucide-react";

const algorithms = [
    {
        category: "图搜索",
        items: ["DFS", "BFS", "Dijkstra", "A*", "递归迷宫生成"],
    },
    {
        category: "数据结构",
        items: [
            "链表 — 插入、删除、搜索、翻转（单链表与双向链表）",
        ],
    },
    {
        category: "树",
        items: [
            "二叉搜索树 — 插入、删除、搜索，带重排动画",
        ],
    },
    {
        category: "交互式图",
        items: [
            "图的遍历 — BFS / DFS",
            "最短路径 — Dijkstra & Bellman-Ford（含负环检测）",
            "最小生成树 — Kruskal & Prim",
            "连通性 — 连通分量、强连通与弱连通",
            "网络流 — 最大流 / 最小割（Edmonds-Karp & Ford-Fulkerson）",
        ],
    },
    {
        category: "排序",
        items: [
            "冒泡排序",
            "选择排序",
            "插入排序",
            "堆排序",
            "归并排序",
            "快速排序",
        ],
    },
    {
        category: "数论",
        items: ["埃拉托斯特尼筛法", "乌拉姆螺旋"],
    },
    {
        category: "回溯",
        items: ["N 皇后"],
    },
    {
        category: "几何",
        items: ["Graham 扫描（凸包）"],
    },
    {
        category: "查找",
        items: ["二分查找"],
    },
    {
        category: "递归",
        items: [
            "斐波那契",
            "二项式系数",
            "错排列",
            "快速幂",
            "第二类斯特林数",
        ],
    },
    {
        category: "自动机",
        items: ["图灵机 — 按位取反、加一、二进制补码"],
    },
    {
        category: "模拟",
        items: ["康威生命游戏"],
    },
];

const inspirations = [
    {
        title: "Pathfinder",
        description: "带我进入 Google 的项目",
        url: "https://youtu.be/n4t_-NjY_Sg",
    },
    {
        title: "Prime Spirals",
        description: "为什么素数会形成这些螺旋？",
        url: "https://youtu.be/EK32jo7i5LQ",
    },
    {
        title: "Recursion Tree",
        description: "brpapa 的递归树可视化器",
        url: "https://github.com/brpapa/recursion-tree-visualizer",
    },
    {
        title: "Turing Machine",
        description: "schaetzc 的 Tursi",
        url: "https://github.com/schaetzc/tursi",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto py-12 px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-2">关于</h1>
                <p className="text-lg text-muted-foreground mb-10">
                    更直观地理解算法 —— 通过可视化，一步一步地。
                </p>

                <section className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        <h2 className="text-2xl font-semibold">这是什么？</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        算法可视化是一个交互式工具，把抽象的算法变得看得见、摸得着。
                        它让你无需去读晦涩的伪代码或手动推演每一步，
                        就能实时观看算法的执行全过程——看寻路算法如何探索迷宫、
                        排序算法如何比较并交换元素，
                        或回溯算法如何在棋盘上有条不紊地放置皇后。
                        目的是让学习过程更直观，也更能体会到其中的奥妙。
                    </p>
                </section>

                <section className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <Layers className="h-5 w-5 text-primary" />
                        <h2 className="text-2xl font-semibold">
                            算法（{algorithms.reduce((sum, c) => sum + c.items.length, 0)}+）
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {algorithms.map((group) => (
                            <div
                                key={group.category}
                                className="rounded-lg border bg-card p-4"
                            >
                                <h3 className="font-medium mb-2">{group.category}</h3>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <span className="text-primary text-[6px]">●</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <Code2 className="h-5 w-5 text-primary" />
                        <h2 className="text-2xl font-semibold">技术栈</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["Next.js", "React", "Tailwind CSS", "Radix UI", "Lucide Icons"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border bg-secondary px-3 py-1 text-sm"
                                >
                                    {tech}
                                </span>
                            )
                        )}
                    </div>
                </section>

                <section className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <GitFork className="h-5 w-5 text-primary" />
                        <h2 className="text-2xl font-semibold">灵感来源</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {inspirations.map((item) => (
                            <a
                                key={item.title}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border p-4 hover:bg-accent transition-colors"
                            >
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
