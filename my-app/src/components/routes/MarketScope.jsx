import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoinMenu from "../pieces/CoinMenu.jsx";
import CoinDetails from "../pieces/CoinDetails.jsx";
import CoinChange from "../pieces/CoinChange";

export default function MarketScope() {
  const [cryptoObject, setCryptoObject] = useState(useLoaderData());
  const [renderedCoin, setRenderedCoin] = useState(cryptoObject.data[0]);

  if (cryptoObject.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <CoinMenu cryptoArray={cryptoObject.data} />
        <CoinDetails renderedCoin={renderedCoin} />
        <CoinChange cryptoArray={cryptoObject.data} />
      </div>
    );
  }
}
