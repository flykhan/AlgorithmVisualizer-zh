"use client";
import { useState, useRef, useCallback, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

// 通用缩放容器：滚轮缩放 + 双指捏合 + 按钮（+/−/重置）。
// 内部内容用 CSS transform: scale 缩放，对 SVG / canvas / DOM 均通用。
// 内容超出容器时自动缩小到 fit（fitContent=true），用户仍可手动缩放。
// transform-origin 居中。

const MIN = 0.15;
const MAX = 5;
const STEP = 1.2; // 每次滚轮/按钮的倍率

export default function ZoomableStage({
    children,
    className = "",
    showButtons = true,
    fitContent = false,
}) {
    const [scale, setScale] = useState(1);
    const scaleRef = useRef(1);
    const pinchRef = useRef(null); // { dist, scale }
    const fitScaleRef = useRef(1); // 自动适配计算出的缩放
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    const apply = useCallback((next) => {
        const clamped = Math.min(MAX, Math.max(MIN, next));
        scaleRef.current = clamped;
        setScale(clamped);
    }, []);

    const zoomIn = useCallback(() => apply(scaleRef.current * STEP), [apply]);
    const zoomOut = useCallback(() => apply(scaleRef.current / STEP), [apply]);
    const reset = useCallback(() => apply(fitScaleRef.current), [apply]);

    // 自动适配：内容超出容器时缩小到 fit
    useEffect(() => {
        if (!fitContent) return;
        const el = contentRef.current;
        const container = containerRef.current;
        if (!el || !container) return;

        const measure = () => {
            const cw = container.clientWidth;
            const ch = container.clientHeight;
            const ew = el.scrollWidth;
            const eh = el.scrollHeight;
            if (cw <= 0 || ch <= 0 || ew <= 0 || eh <= 0) return;
            // 只缩小（fit），不放大
            const s = Math.min(cw / ew, ch / eh, 1);
            fitScaleRef.current = s;
            scaleRef.current = s;
            setScale(s);
        };

        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(container);
        ro.observe(el);
        return () => ro.disconnect();
    }, [fitContent, children]);

    // 滚轮缩放
    const onWheel = useCallback((e) => {
        e.preventDefault();
        if (e.deltaY < 0) apply(scaleRef.current * STEP);
        else apply(scaleRef.current / STEP);
    }, [apply]);

    // 双指捏合
    const onTouchStart = useCallback((e) => {
        if (e.touches.length === 2) {
            const [a, b] = e.touches;
            pinchRef.current = {
                dist: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
                scale: scaleRef.current,
            };
        }
    }, []);

    const onTouchMove = useCallback((e) => {
        if (e.touches.length === 2 && pinchRef.current) {
            const [a, b] = e.touches;
            const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
            if (pinchRef.current.dist > 0) {
                apply(pinchRef.current.scale * (dist / pinchRef.current.dist));
            }
        }
    }, [apply]);

    const onTouchEnd = useCallback(() => {
        pinchRef.current = null;
    }, []);

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            ref={containerRef}
            onWheel={onWheel}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div
                className="flex h-full w-full items-center justify-center"
                ref={contentRef}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                }}
            >
                {children}
            </div>
            {showButtons && (
                <div className="absolute right-2 top-2 z-20 flex flex-col gap-1">
                    <button
                        onClick={zoomIn}
                        aria-label="放大"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow hover:bg-white"
                    >
                        <ZoomIn className="h-4 w-4" />
                    </button>
                    <button
                        onClick={zoomOut}
                        aria-label="缩小"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow hover:bg-white"
                    >
                        <ZoomOut className="h-4 w-4" />
                    </button>
                    <button
                        onClick={reset}
                        aria-label="重置缩放"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow hover:bg-white"
                    >
                        <RotateCcw className="h-4 w-4" />
                    </button>
                </div>
            )}
        </div>
    );
}
