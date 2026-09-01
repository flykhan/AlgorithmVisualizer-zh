import { CustomSlider } from '@/components/custom-slider';
import { Button } from '@/components/ui/button';
import { Play, Trash2 } from 'lucide-react';

export default function Menu({ onSpeedChange, onCountChange, onViusalize, disabled, onClear }) {
    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">N 皇后</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSlider
                    title="棋盘大小"
                    defaultValue={4}
                    min={1}
                    max={8}
                    step={1}
                    onChange={onCountChange}
                    disabled={disabled}
                />
                <CustomSlider
                    title="速度"
                    defaultValue={50}
                    min={1}
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
                    onClick={onClear}
                    disabled={disabled}
                >
                    <Trash2 /> 清空棋盘
                </Button>
            </div>
        </div>
    );
}
