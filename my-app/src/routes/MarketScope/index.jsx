import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoinMenu from "./components/CoinMenu.jsx";
import CoinDetails from "./components/CoinDetails.jsx";
import CoinChange from "./components/CoinChange.jsx";

export default function MarketScope() {
  const [cryptoObject, setCryptoObject] = useState(useLoaderData());
  const [renderedCoin, setRenderedCoin] = useState(cryptoObject.data[0]);

  if (cryptoObject.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container pt-60 pb-40">
        {/* <CoinDetails renderedCoin={renderedCoin} /> */}
        <CoinMenu cryptoArray={cryptoObject.data} />
        <CoinChange cryptoArray={cryptoObject.data} />
      </div>
    );
  }
}
