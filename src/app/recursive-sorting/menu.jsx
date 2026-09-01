import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { Button } from '@/components/ui/button';
import { Play, Shuffle } from 'lucide-react';

export default function Menu({ disabled, onViusalize, onRandomize, onCountChange, onAlgoChanged, onSpeedChange }) {
    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">递归排序</h2>

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
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">算法</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSelect
                    title="Algorithm"
                    options={["归并排序", "堆排序", "快速排序"]}
                    onChange={onAlgoChanged}
                    disabled={disabled}
                />
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
