import React from "react";

export default function CoinDetails({ renderedCoin }) {
  return (
    <div className="coin-details">
      <h2>{`${renderedCoin.name} (${renderedCoin.symbol})`}</h2>
      <img
        src={renderedCoin.imgSource}
        alt={renderedCoin.name}
        onError={(e) => {
          e.target.src = "https://i.ibb.co/zRLmrMN/shitcoin.png";
        }}
        width={200}
        height={200}
      />
      <p className="coin-price">Real-Time Price: ${renderedCoin.price}</p>
    </div>
  );
}
