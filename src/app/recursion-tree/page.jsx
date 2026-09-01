"use client";

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { getTree, recursionActions } from '@/lib/algorithms/recursion';
import { buchheimLayout } from '@/components/tree/layout';
import { useTreeEditor } from '@/components/tree/use-tree-editor';
import TreeCanvas from '@/components/tree/tree-canvas';
import ZoomableStage from '@/components/zoomable-stage';
import Menu from './menu';

export default function RecursionTree() {
    const [n, setN] = useState(0);
    const [r, setR] = useState(2);
    const [algo, setAlgo] = useState(0);
    const g = useTreeEditor();

    const onStart = () => g.run(recursionActions(getTree(n, algo, r)));

    return (
        <div className="flex flex-col h-screen h-dvh">
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row flex-1 overflow-hidden">
                <Menu
                    setN={setN}
                    setR={setR}
                    setAlgo={setAlgo}
                    onStart={onStart}
                    disabled={g.isRunning}
                />
                <div className="relative flex-1 overflow-hidden">
                    <ZoomableStage className="h-full w-full">
                        {g.status && (
                            <div className="absolute left-3 top-3 z-10 rounded-md bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white shadow">
                                {g.status}
                            </div>
                        )}
                        <div className="h-full w-full p-6">
                            <TreeCanvas
                                tree={g.tree}
                                layout={buchheimLayout}
                                nodeState={g.nodeState}
                                edgeState={g.edgeState}
                                labels={g.labels}
                            />
                        </div>
                    </ZoomableStage>
                </div>
            </div>
        </div>
    );
}
