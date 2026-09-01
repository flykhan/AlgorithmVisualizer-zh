import { Button } from '@/components/ui/button';
import { Play, Square, Trash2, Shuffle } from 'lucide-react';

export default function Menu({ onStart, onStop, onClear, onRandom, isRunning }) {
    return (
        <div className="menu-panel w-full md:w-64 bg-gray-100 p-4 space-y-6 overflow-auto max-h-[46dvh] md:max-h-none">
            <h2 className="text-lg font-semibold">生命游戏</h2>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-300" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">操作</span>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>
                <Button
                    className="w-full"
                    onClick={onStart}
                    disabled={isRunning}
                >
                    <Play /> 开始模拟
                </Button>
                <Button
                    className="w-full"
                    variant="outline"
                    onClick={onStop}
                    disabled={!isRunning}
                >
                    <Square /> 停止模拟
                </Button>
                <Button
                    className="w-full"
                    variant="outline"
                    onClick={onRandom}
                    disabled={isRunning}
                >
                    <Shuffle /> 随机填充
                </Button>
                <Button
                    className="w-full"
                    variant="secondary"
                    onClick={onClear}
                    disabled={isRunning}
                >
                    <Trash2 /> 清空棋盘
                </Button>
            </div>
        </div>
    );
}
