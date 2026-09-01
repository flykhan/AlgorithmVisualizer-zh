import './style.css';

export default function Cell({ cell }) {
    const getClassName = () => {
        if (cell.isAttacked) return "boardCell attacked";
        if (cell.isCurrent) return "boardCell current";
        if (cell.isPresent) return "boardCell present";
        if (cell.isChecked) return "boardCell checked";
        return "boardCell";
    };

    const getStyle = () => ({
        backgroundColor: (cell.row + cell.col) % 2 === 0 ? "white" : "grey"
    });

    return (
        <div className={getClassName()} style={getStyle()}>
            {cell.isPresent && (
                <img
                    src="/images/queen-cell.png"
                    alt="皇后"
                    style={{ width: "80%", height: "80%", objectFit: "contain" }}
                />
            )}
        </div>
    );
}
