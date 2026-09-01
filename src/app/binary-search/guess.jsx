import { Button } from '@/components/ui/button';
import DualHandleSlider from "./custom-dual-slider";

export default function Guess({ yesButton, noButton, upper, lower, max }) {
    const mid = Math.floor((upper + lower) / 2);

    return (
        <div>
            <div className="card card-body">
                <center style={{ justifyContent: "center" }}>
                    <DualHandleSlider upper={upper} lower={lower} max={max} />
                </center>
            </div>
            <h1 className="text-3xl">
                你心里想的数是否大于 {mid}？
            </h1>
            <br />
            <Button onClick={yesButton} className="mx-2">是</Button>
            <Button onClick={noButton} className="mx-2">否</Button>
            <br />
        </div>
    );
}
