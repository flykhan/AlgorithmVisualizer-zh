"use client";
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';
import Canvas from "./canvas";
import Menu from "./menu";
import ZoomableStage from '@/components/zoomable-stage';

export default function ConvexHull() {
    const [width, setWidth] = useState(600);
    const [height, setHeight] = useState(600);
    const [number, setNumber] = useState(50);
    // 初始即生成点，避免进入页面时空白画布
    const [dots, setDots] = useState(() => getNewDots(50, 600, 600));
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(100);

    const containerRef = useRef(null);
    const numberRef = useRef(number);

    useEffect(() => { numberRef.current = number; }, [number]);

    // 挂载后读取真实容器尺寸，并据此重新铺满点
    useEffect(() => {
        const w = containerRef.current ? containerRef.current.offsetWidth : 600;
        const h = containerRef.current ? containerRef.current.offsetHeight : 600;
        setWidth(w);
        setHeight(h);
        setDots(getNewDots(numberRef.current, w, h));
    }, []);

    const handleValueIncrease = (value) => {
        setNumber(value);
        setIsRunning(false);
        setDots(getNewDots(value, width, height));
    };

    const changeSpeed = (speed) => {
        setSpeed(600 - speed * 10);
    };

    const handleVisualize = () => {
        // 无点时不进入运行态，避免卡死
        if (dots.length < 3) return;
        setIsRunning(true);
    };

    const handleTurnOff = () => {
        setIsRunning(false);
    };

    const handleRefreshDots = () => {
        setIsRunning(false);
        setDots(getNewDots(numberRef.current, width, height));
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row flex-1 overflow-hidden">
                <Menu
                    onRefresh={handleRefreshDots}
                    onVisualize={handleVisualize}
                    onChangeSpeed={changeSpeed}
                    onChangeValues={handleValueIncrease}
                    disabled={isRunning}
                />
                <div className="flex flex-1 flex-col items-center justify-center overflow-hidden">
                    <ZoomableStage className="h-full w-full">
                        <div className="flex h-full w-full items-center justify-center" ref={containerRef}>
                            <Canvas
                                width={width}
                                height={height}
                                dots={dots}
                                onTurnOff={handleTurnOff}
                                onGoing={isRunning}
                                speed={speed}
                            />
                        </div>
                    </ZoomableStage>
                </div>
            </div>
        </div>
    );
}

function getNewDots(number, width, height) {
    const dots = [];
    // 点数下限保护，避免算法空集/单点异常
    const n = Math.max(number, 3);
    for (let i = 0; i < n; i++) {
        dots.push(getDot(width, height));
    }
    dots.sort((a, b) => {
        if (a.xx !== b.xx) return a.xx - b.xx;
        return a.yy - b.yy;
    });
    return dots;
}

function getDot(width, height) {
    width = width - 50;
    height = height - 50;
    const rowpos = Math.floor(Math.random() * height) + 25;
    const colpos = Math.floor(Math.random() * width) + 25;
    return { xx: colpos, yy: rowpos };
}
