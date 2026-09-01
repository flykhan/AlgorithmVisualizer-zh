import { CustomSelect } from '@/components/custom-select';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';

export default function Menu({ visualize, onAlgoChanged, onReset, setInput1, setInput2, disabled }) {
    return (
        <div className="w-64 min-w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46vh] md:max-h-none">
            <h2 className="text-lg font-semibold">图灵机</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSelect
                    title="算法"
                    options={["按位取反", "加一", "二进制补码"]}
                    onChange={onAlgoChanged}
                    disabled={disabled}
                />
                <div className="space-y-2">
                    <label className="text-sm font-medium">输入二进制</label>
                    <input
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                        placeholder="例如 10110"
                        onChange={setInput1}
                        disabled={disabled}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">输入二进制 2</label>
                    <input
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                        placeholder="例如 01101"
                        onChange={setInput2}
                        disabled={disabled}
                    />
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <Button
                    className="w-full"
                    onClick={visualize}
                    disabled={disabled}
                >
                    <Play /> 可视化
                </Button>
                <Button
                    className="w-full"
                    variant="outline"
                    onClick={onReset}
                    disabled={disabled}
                >
                    <RotateCcw /> 重置
                </Button>
            </div>
        </div>
    );
}
