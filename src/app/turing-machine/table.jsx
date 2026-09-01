export default function Table({ data, state }) {
    return (
        <div>
            <table className="table-auto border border-slate-800 border-collapse">
                <thead>
                    <tr>
                        <th className="border border-slate-500 px-4 py-2" scope="col">状态</th>
                        <th className="border border-slate-500 px-4 py-2" scope="col">输入</th>
                        <th className="border border-slate-500 px-4 py-2" scope="col">下一状态</th>
                        <th className="border border-slate-500 px-4 py-2" scope="col">输出</th>
                        <th className="border border-slate-500 px-4 py-2" scope="col">方向</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowidx) => (
                        <tr key={rowidx} className={rowidx === state ? 'bg-blue-100' : ''}>
                            <th className="border border-slate-500 px-4 py-2" scope="row">{row[0]}</th>
                            <th className="border border-slate-500 px-4 py-2">{row[1]}</th>
                            <td className="border border-slate-500 px-4 py-2">{row[2]}</td>
                            <td className="border border-slate-500 px-4 py-2">{row[3]}</td>
                            <td className="border border-slate-500 px-4 py-2">{row[4]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
