import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { CustomToggle } from '@/components/custom-toggle';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, MousePointerClick } from 'lucide-react';
import { Key } from './kbd';

// Shared sidebar for the graph visualizers. The page owns the menu and wires
// these callbacks to a useGraphEditor() instance + its chosen algorithms.

// Each control: optional `click` (mouse icon) + `text` prefix, `keys` caps, desc.
// Per-element actions (S/F/Del/X) are surfaced in the on-canvas command bar when
// a node/edge is selected, so the menu only points you there.
const CONTROLS = [
    { keys: ['N'], desc: '添加节点' },
    { keys: ['E'], desc: '连续添加边' },
    { keys: ['D'], desc: '删除元素' },
    { keys: ['Esc'], desc: '进入选择' },
    { click: true, text: '节点 / 边', desc: '点选以操作' },
    { text: '拖动', desc: '移动节点' },
];

export default function GraphMenu({
    title,
    algorithms,
    presets,
    hideDirected = false,
    disabled,
    onDirectedChange,
    onAlgorithmChange,
    onPresetChange,
    onSpeedChange,
    onVisualize,
    onClear,
}) {
    const controls = CONTROLS;

    return (
        <div className="w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46vh] md:max-h-none">
            <h2 className="text-lg font-semibold">{title}</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                {!hideDirected && (
                    <CustomToggle title="有向图" onCheckedChange={onDirectedChange} disabled={disabled} />
                )}
                <CustomSelect
                    // remount (reset to first option) when the algorithm set changes,
                    // e.g. when toggling Directed swaps the available algorithms
                    key={algorithms.join('|')}
                    title="算法"
                    options={algorithms}
                    onChange={onAlgorithmChange}
                    disabled={disabled}
                />
                <CustomSelect
                    title="初始图"
                    options={presets.map((p) => p.name)}
                    onChange={onPresetChange}
                    disabled={disabled}
                />
                <CustomSlider
                    title="速度"
                    defaultValue={50}
                    min={10}
                    max={100}
                    step={1}
                    onChange={onSpeedChange}
                />
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <Button className="w-full" onClick={onVisualize} disabled={disabled}>
                    <Play /> 可视化
                </Button>
                <Button className="w-full" variant="outline" onClick={onClear} disabled={disabled}>
                    <RotateCcw /> 清空
                </Button>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作说明</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <dl className="text-xs text-gray-600 space-y-1.5">
                    {controls.map((c, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                            <dt className="flex items-center gap-1 whitespace-nowrap">
                                {c.click && <MousePointerClick className="h-3 w-3 text-gray-400" />}
                                {c.text && <span className="text-gray-500">{c.text}</span>}
                                {c.keys && c.keys.map((k) => <Key key={k}>{k}</Key>)}
                            </dt>
                            <dd className="text-right">{c.desc}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
