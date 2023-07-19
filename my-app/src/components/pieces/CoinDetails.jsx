import React from "react";

const CoinDetails = ({ renderedCoin }) => {
  // if (typeof renderedCoin.price === "number") {
  //   let parsedPrice = Number(renderedCoin.price).toFixed(2);
  // } else {
  //   let parsedPrice = renderedCoin.price;
  // }

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
};

export default CoinDetails;
