export default function CoinChangeItem({ coin }) {
    const roundedChange = Math.round(coin.changePercent24Hr * 10) / 10;
    const color =
        coin.changePercent24Hr < 0 ? "text-red-500" : "text-green-500";
    return <tr
        key={coin.symbol}
        className="border-b text-sm font-semibold"
    >
        <td className="py-3 px-4 text-dark">
            <div className="flex">
                <span className="mr-2"><img src={coin.imgSource} alt={coin.name} width={20} height={20} /></span>
                <span>
                    {`${coin.name} (${coin.symbol})`}
                </span>
            </div>
        </td>
        <td className={"py-3 px-4 font-bold " + color}>{roundedChange}%</td>
    </tr>
}