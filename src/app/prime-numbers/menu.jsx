import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { Button } from '@/components/ui/button';
import { Play, RefreshCw } from 'lucide-react';

export default function Menu({ onChangeSpeed, onChangeValues, onVisualize, onRefresh, disabled, setAlgo }) {
    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46vh] md:max-h-none">
            <h2 className="text-lg font-semibold">素数</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSelect
                    title="算法"
                    options={["埃氏筛", "螺旋"]}
                    onChange={setAlgo}
                    disabled={disabled}
                />
                <CustomSlider
                    onChange={onChangeSpeed}
                    title="速度"
                    defaultValue={10}
                    step={1}
                    min={10}
                    max={50}
                />
                <CustomSlider
                    onChange={onChangeValues}
                    title="数字总数"
                    defaultValue={100}
                    step={1}
                    min={10}
                    max={500}
                    disabled={disabled}
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
                <Button className="w-full" variant="outline" onClick={onRefresh} disabled={disabled}>
                    <RefreshCw /> 刷新
                </Button>
            </div>
        </div>
    );
}
