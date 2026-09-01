import { CustomSelect } from '@/components/custom-select';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export default function Menu({ setN, setR, setAlgo, onStart, disabled }) {
    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">递归树</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">配置</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSelect
                    title="任务"
                    options={['斐波那契', '二项式系数', "错排", "快速幂", "第二类斯特林数"]}
                    onChange={setAlgo}
                    disabled={disabled}
                />
                <div className="flex gap-3">
                    <div className="flex-1">
                        <CustomSelect
                            title="N"
                            options={["0", "1", "2", "3", "4", "5", "6"]}
                            onChange={setN}
                            disabled={disabled}
                        />
                    </div>
                    <div className="flex-1">
                        <CustomSelect
                            title="R"
                            options={["0", "1", "2", "3", "4", "5", "6"]}
                            onChange={setR}
                            disabled={disabled}
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <Button className="w-full" onClick={onStart} disabled={disabled}>
                    <Play /> 可视化
                </Button>
            </div>
        </div>
    );
}
