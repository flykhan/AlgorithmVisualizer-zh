import { CustomSlider } from '@/components/custom-slider';
import { Button } from '@/components/ui/button';
import { Play, RefreshCw } from 'lucide-react';

export default function Menu({ onRefresh, onVisualize, onChangeSpeed, onChangeValues, disabled }) {
    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46vh] md:max-h-none">
            <h2 className="text-lg font-semibold">凸包</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSlider
                    title="速度"
                    defaultValue={10}
                    min={10}
                    max={50}
                    step={1}
                    onChange={onChangeSpeed}
                />
                <CustomSlider
                    title="总点数"
                    defaultValue={50}
                    min={10}
                    max={200}
                    step={1}
                    onChange={onChangeValues}
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
                    onClick={onVisualize}
                    disabled={disabled}
                >
                    <Play /> 可视化
                </Button>
                <Button
                    className="w-full"
                    variant="outline"
                    onClick={onRefresh}
                    disabled={disabled}
                >
                    <RefreshCw /> 重新生成点
                </Button>
            </div>
        </div>
    );
}
