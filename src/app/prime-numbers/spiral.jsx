export default function Spiral({ primes, maxPrime }) {
    // 螺旋坐标范围由最大素数决定（cell 最大到 maxPrime）
    // 内容中心在 (maxPrime, maxPrime)，半径约 maxPrime，故画布取 2*maxPrime 见方
    const size = Math.max(maxPrime, 1) * 2;
    const cx = size / 2;
    const cy = size / 2;
    const radius = Math.max(size / 300, 1);

    return (
        <svg
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "min(80vw, 60vh)", height: "min(80vw, 60vh)" }}
        >
            {primes.map((cell, cellidx) => (
                <circle
                    key={cellidx}
                    cx={cell * Math.cos(cell) + cx}
                    cy={cell * Math.sin(cell) + cy}
                    r={radius}
                    stroke="black"
                    strokeWidth="0.5"
                    fill="#51c4b5"
                />
            ))}
        </svg>
    );
}
