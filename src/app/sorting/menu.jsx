import { useState } from 'react';
import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { CustomToggle } from '@/components/custom-toggle';
import { Button } from '@/components/ui/button';
import { Play, Shuffle } from 'lucide-react';

export default function Menu({ disabled, onDoubleChange, onViusalize, onRandomize, onCountChange, onAlgoChanged1, onAlgoChanged2, onSpeedChange }) {
    const [compareMode, setCompareMode] = useState(false);

    const handleDoubleChange = (checked) => {
        setCompareMode(checked);
        onDoubleChange(checked);
    };

    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">排序</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSlider
                    title="数量"
                    defaultValue={20}
                    min={10}
                    max={100}
                    step={10}
                    onChange={onCountChange}
                    disabled={disabled}
                />
                <CustomSlider
                    defaultValue={50}
                    title="速度"
                    onChange={onSpeedChange}
                    min={10}
                    max={100}
                    step={1}
                />
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">算法</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSelect
                    title={compareMode ? "算法 1" : "算法"}
                    options={["冒泡排序", "选择排序", "插入排序", "快速排序"]}
                    onChange={onAlgoChanged1}
                    disabled={disabled}
                />
                <CustomToggle
                    title="比较模式"
                    onCheckedChange={handleDoubleChange}
                    disabled={disabled}
                />
                {compareMode && (
                    <CustomSelect
                        title="算法 2"
                        options={["冒泡排序", "选择排序", "插入排序", "快速排序"]}
                        onChange={onAlgoChanged2}
                        disabled={disabled}
                    />
                )}
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <Button
                    className="w-full"
                    onClick={onViusalize}
                    disabled={disabled}
                >
                    <Play /> 可视化
                </Button>
                <Button
                    className="w-full"
                    variant="outline"
                    onClick={onRandomize}
                    disabled={disabled}
                >
                    <Shuffle /> 随机生成
                </Button>
            </div>
        </div>
    );
}
