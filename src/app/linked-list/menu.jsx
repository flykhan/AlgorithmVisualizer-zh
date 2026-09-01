import { useState } from 'react';
import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { CustomToggle } from '@/components/custom-toggle';
import { Button } from '@/components/ui/button';
import { Play, Shuffle, RotateCcw } from 'lucide-react';

const OPERATIONS = [
    '头部插入',
    '尾部插入',
    '按索引插入',
    '按值删除',
    '按索引删除',
    '搜索',
    '反转',
];

const NEEDS_VALUE = new Set([0, 1, 2, 3, 5]);
const NEEDS_INDEX = new Set([2, 4]);

export default function Menu({
    disabled,
    onListTypeChange,
    onOperationChange,
    onValueChange,
    onIndexChange,
    onSpeedChange,
    onVisualize,
    onRandomize,
    onReset,
}) {
    const [operation, setOperation] = useState(0);

    const handleOperation = (op) => {
        setOperation(op);
        onOperationChange(op);
    };

    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46vh] md:max-h-none">
            <h2 className="text-lg font-semibold">链表</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomToggle
                    title="双向链表"
                    onCheckedChange={(checked) => onListTypeChange(checked ? 1 : 0)}
                    disabled={disabled}
                />
                <CustomSelect
                    title="操作"
                    options={OPERATIONS}
                    onChange={handleOperation}
                    disabled={disabled}
                />
                {NEEDS_VALUE.has(operation) && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium whitespace-nowrap">值</label>
                        <input
                            type="number"
                            defaultValue={42}
                            onChange={(e) => onValueChange(e.target.value)}
                            disabled={disabled}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                        />
                    </div>
                )}
                {NEEDS_INDEX.has(operation) && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium whitespace-nowrap">索引</label>
                        <input
                            type="number"
                            defaultValue={1}
                            min={0}
                            onChange={(e) => onIndexChange(e.target.value)}
                            disabled={disabled}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                        />
                    </div>
                )}
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
                <div className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={onRandomize} disabled={disabled}>
                        <Shuffle /> 随机
                    </Button>
                    <Button className="flex-1" variant="outline" onClick={onReset} disabled={disabled}>
                        <RotateCcw /> 重置
                    </Button>
                </div>
            </div>
        </div>
    );
}
