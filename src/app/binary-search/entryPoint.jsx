import { CustomInput } from '@/components/custom-input';
import { Button } from '@/components/ui/button';

export default function EntryPoint({ startGame, upper, setUpper }) {
    const setData = (val) => {
        if (val === "") val = 0;
        setUpper(val);
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <CustomInput
                title="上限"
                defaultValue={100}
                type="number"
                onChange={setData}
                placeholder="输入数值…"
            />
            <br /><br />
            <h1 className="text-3xl">
                在心里想一个 0 到 {upper} 之间的数字
            </h1>
            <br />
            <Button onClick={startGame}>
                开始游戏
            </Button>
        </div>
    );
}
