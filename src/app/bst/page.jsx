"use client";

import { useState } from 'react';
import Navbar from '@/components/navbar';
import * as bst from '@/lib/algorithms/bst';
import * as redBlack from '@/lib/algorithms/redBlack';
import { binaryLayout } from '@/components/tree/layout';
import { useTreeEditor } from '@/components/tree/use-tree-editor';
import TreeCanvas from '@/components/tree/tree-canvas';
import TreeMenu from '@/components/tree/tree-menu';
import ZoomableStage from '@/components/zoomable-stage';

const MODES = ['二叉搜索树', '红黑树'];
const SEED = [50, 30, 70, 20, 40, 60, 80];
const seedFor = (mode) => (mode === 1 ? redBlack.fromValues(SEED) : bst.fromValues(SEED));

export default function Bst() {
    const [mode, setMode] = useState(0);
    const [initialTree] = useState(() => seedFor(0));
    const g = useTreeEditor({ initialTree });
    const algo = mode === 1 ? redBlack : bst;

    const onModeChange = (m) => {
        if (g.isRunning) return;
        setMode(m);
        g.reset(seedFor(m));
    };

    return (
        <div className="flex flex-col h-screen h-dvh">
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row flex-1 overflow-hidden">
                <TreeMenu
                    title={MODES[mode]}
                    modes={MODES}
                    onModeChange={onModeChange}
                    disabled={g.isRunning}
                    onInsert={(v) => g.run(algo.insertActions(g.getContext().tree, v))}
                    onDelete={(v) => g.run(algo.deleteActions(g.getContext().tree, v))}
                    onSearch={(v) => g.run(algo.searchActions(g.getContext().tree, v))}
                    onClear={g.clear}
                    onSpeedChange={g.setSpeed}
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
                                layout={binaryLayout}
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
