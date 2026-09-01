import { useState } from 'react';
import { CustomSlider } from '@/components/custom-slider';
import { CustomSelect } from '@/components/custom-select';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Search, RotateCcw } from 'lucide-react';

// Sidebar for tree visualizers: an optional tree-type dropdown, a value field +
// insert/delete/search actions, clear, and a speed slider. Callers pass the op
// handlers (they get the number).

export default function TreeMenu({ title, disabled, modes, onModeChange, onInsert, onDelete, onSearch, onClear, onSpeedChange }) {
    const [value, setValue] = useState('');
    const num = () => Number(value);
    const valid = value.trim() !== '' && Number.isFinite(num());

    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">{title}</h2>

            {modes && (
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gray-300" />
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">树类型</span>
                        <div className="h-px flex-1 bg-gray-300" />
                    </div>
                    <CustomSelect title="类型" options={modes} onChange={onModeChange} disabled={disabled} />
                </div>
            )}

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
                    <Button className="flex-1" variant="outline" onClick={() => valid && onDelete(num())} disabled={disabled || !valid}>
                        <Minus /> 删除
                    </Button>
                </div>
                <Button className="w-full" variant="outline" onClick={() => valid && onSearch(num())} disabled={disabled || !valid}>
                    <Search /> 搜索
                </Button>
                <CustomSlider title="速度" defaultValue={50} min={10} max={100} step={1} onChange={onSpeedChange} />
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <Button className="w-full" variant="outline" onClick={onClear} disabled={disabled}>
                    <RotateCcw /> 清空
                </Button>
            </div>
        </div>
    );
}
