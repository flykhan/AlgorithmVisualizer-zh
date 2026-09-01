"use client";
import Navbar from '@/components/navbar';
import { useRef, useState, useEffect } from 'react';
import Menu from "./menu";
import Grid from "./grid";

const CELL = 25; // 每个格子边长（px）

export default function GameOfLifePage() {
    const containerRef = useRef(null);
    const [grid, setGrid] = useState(() => {
        const g = buildGrid(20, 24);
        randomizeGrid(g, 0.22);
        return g;
    });
    const [running, setRunning] = useState(false);
    const runningRef = useRef(false);

    // 依据容器实际宽高计算行列数，使网格刚好铺满、不溢出
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const w = el.offsetWidth || el.clientWidth || 400;
        const h = el.offsetHeight || el.clientHeight || 600;
        const col = Math.max(Math.floor(w / CELL), 8);
        const row = Math.max(Math.floor(h / CELL), 10);
        setGrid(() => {
            const g = buildGrid(row, col);
            randomizeGrid(g, 0.22);
            return g;
        });
    }, []);

    const handleMouseDown = (row, col) => {
        if (running) return;
        setGrid((prev) => {
            const ng = prev.map((r) => r.map((c) => ({ ...c })));
            ng[row][col].isAlive = !ng[row][col].isAlive;
            return ng;
        });
    };

    const handleMouseEnter = (_row, _col) => {};

    const handleMouseUp = (_row, _col) => {};

    const handleStart = () => {
        if (running) return;
        setRunning(true);
        runningRef.current = true;
        gameOfLife(grid);
    };

    const handleStop = () => {
        setRunning(false);
        runningRef.current = false;
    };

    // 清空：生成全空棋盘，供用户手动绘制
    const handleClearBoard = () => {
        setRunning(false);
        runningRef.current = false;
        setGrid((prev) => buildGrid(prev.length || 20, prev[0]?.length || 24));
    };

    // 随机填充
    const handleRandom = () => {
        setRunning(false);
        runningRef.current = false;
        setGrid((prev) => {
            const g = buildGrid(prev.length || 20, prev[0]?.length || 24);
            randomizeGrid(g, 0.22);
            return g;
        });
    };

    const gameOfLife = async (startGrid) => {
        let next = startGrid;
        while (runningRef.current) {
            next = getNextGeneration(next);
            setGrid(next);
            await sleep(200);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar title="生命游戏" />
            <div className="flex flex-col-reverse md:flex-row flex-1 overflow-hidden">
                <Menu
                    onStart={handleStart}
                    onStop={handleStop}
                    onClear={handleClearBoard}
                    onRandom={handleRandom}
                    isRunning={running}
                />
                <div className="flex flex-1 items-center justify-center overflow-auto p-2">
                    <div
                        className="flex h-full w-full items-center justify-center"
                        ref={containerRef}
                    >
                        <Grid
                            grid={grid}
                            onMouseDown={handleMouseDown}
                            onMouseEnter={handleMouseEnter}
                            onMouseUp={handleMouseUp}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const buildGrid = (row, col) => {
    let grid = [];
    for (let i = 0; i < row; i++) {
        let r = [];
        for (let j = 0; j < col; j++) {
            r.push({ row: i, col: j, isAlive: false });
        }
        grid.push(r);
    }
    return grid;
};

const randomizeGrid = (grid, ratio) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j].isAlive = Math.random() < ratio;
        }
    }
};

const getNextGeneration = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
        newGrid.push(grid[i].map((node) => ({ ...node })));
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const node = grid[i][j];
            const aliveNeighbors = getAliveNeighbors(grid, i, j);
            if (node.isAlive) {
                if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                    newGrid[i][j].isAlive = false;
                }
            } else {
                if (aliveNeighbors === 3) {
                    newGrid[i][j].isAlive = true;
                }
            }
        }
    }
    return newGrid;
};

const getAliveNeighbors = (grid, row, col) => {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i === row && j === col) continue;
            if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j].isAlive) {
                count++;
            }
        }
    }
    return count;
};

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
