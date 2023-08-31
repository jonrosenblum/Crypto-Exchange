import { SwiperSlide } from 'swiper/react';

export default function CoinMenuItem({ symbol, price, name, imgSource }) {
    return <div>
        <div className="flex">
            <img
                className="h-full"
                src={imgSource}
                onError={(e) => {
                    e.target.src = "https://i.ibb.co/zRLmrMN/shitcoin.png";
                }}
                alt={symbol}
                width={50}
                height={50}
            />
            <div className="ml-3">
                <p className="font-semibold">{name}</p>
                <small>({symbol})</small>
            </div>
        </div>
        <p className="text-xs mt-2">Real-Time Price: <span className="text-sm font-semibold">{price.toFixed(
            2
        )}</span></p>
    </div>

}