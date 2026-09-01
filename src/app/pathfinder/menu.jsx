import { CustomSelect } from '@/components/custom-select';
import { Button } from '@/components/ui/button';
import { Play, Grid3X3, Eraser, Trash2 } from 'lucide-react';

export default function Menu({ onAlgoChanged, onVisualize, algorithms, mazes, onMazeChanged, onCreateMaze, onClearBoard, onClearPath, disabled }) {
    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">路径查找</h2>

            <CustomSelect
                title="算法"
                options={algorithms}
                onChange={onAlgoChanged}
                disabled={disabled}
            />

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">迷宫</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <CustomSelect
                    title="分割类型"
                    options={mazes}
                    onChange={onMazeChanged}
                    disabled={disabled}
                />
                <Button
                    className="w-full"
                    variant="outline"
                    onClick={onCreateMaze}
                    disabled={disabled}
                >
                    <Grid3X3 /> 生成迷宫
                </Button>
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
                <div className="flex gap-2">
                    <Button
                        className="flex-1"
                        variant="secondary"
                        size="sm"
                        onClick={onClearPath}
                        disabled={disabled}
                    >
                        <Eraser /> 清除路径
                    </Button>
                    <Button
                        className="flex-1"
                        variant="secondary"
                        size="sm"
                        onClick={onClearBoard}
                        disabled={disabled}
                    >
                        <Trash2 /> 清除网格
                    </Button>
                </div>
            </div>
        </div>
    );
}
