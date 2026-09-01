
import "./node.css";

export default function Node({ node, isAlive, onMouseDown, onMouseEnter, onMouseUp }) {
    return (
        <div
            id={`node-${node.row}-${node.col}`}
            className={isAlive ? "node node-wall" : "node"}
            onMouseDown={() => onMouseDown(node.row, node.col)}
            onMouseEnter={() => onMouseEnter(node.row, node.col)}
            onMouseUp={() => onMouseUp(node.row, node.col)}
        />
    );
}