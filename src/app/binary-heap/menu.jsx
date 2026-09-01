import { useState } from 'react';
import { CustomSlider } from '@/components/custom-slider';
import { Button } from '@/components/ui/button';
import { Plus, ArrowUpFromLine, Wand2, ArrowDownWideNarrow, RotateCcw } from 'lucide-react';

// Sidebar for the binary heap (min-heap): insert a value, extract the min,
// build a heap from a typed list, and run heapsort.

export default function HeapMenu({ disabled, onInsert, onExtract, onBuild, onHeapsort, onClear, onSpeedChange }) {
    const [value, setValue] = useState('');
    const [list, setList] = useState('5, 3, 8, 1, 9, 2, 7');

    const num = () => Number(value);
    const valid = value.trim() !== '' && Number.isFinite(num());
    const parsedList = () => list.split(/[\s,]+/).map(Number).filter((n) => Number.isFinite(n));

    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">二叉堆（最小堆）</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium whitespace-nowrap">值</label>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        disabled={disabled}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                    />
                </div>
                <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => valid && onInsert(num())} disabled={disabled || !valid}>
                        <Plus /> 插入
                    </Button>
                    <Button className="flex-1" variant="outline" onClick={onExtract} disabled={disabled}>
                        <ArrowUpFromLine /> 取最小
                    </Button>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">建堆</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium whitespace-nowrap">列表</label>
                    <input
                        type="text"
                        value={list}
                        onChange={(e) => setList(e.target.value)}
                        disabled={disabled}
                        placeholder="例如 5, 3, 8, 1"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                    />
                </div>
                <Button className="w-full" variant="outline" onClick={() => onBuild(parsedList())} disabled={disabled || parsedList().length === 0}>
                    <Wand2 /> 建堆
                </Button>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <Button className="w-full" variant="outline" onClick={onHeapsort} disabled={disabled}>
                    <ArrowDownWideNarrow /> 堆排序
                </Button>
                <p className="text-xs text-gray-500">最小堆的堆排序会按降序排列。</p>
                <CustomSlider title="速度" defaultValue={50} min={10} max={100} step={1} onChange={onSpeedChange} />
                <Button className="w-full" variant="outline" onClick={onClear} disabled={disabled}>
                    <RotateCcw /> 清空
                </Button>
            </div>
        </div>
    );
}
