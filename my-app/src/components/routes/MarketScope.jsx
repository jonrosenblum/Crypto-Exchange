import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CoinMenu from "../pieces/CoinMenu.jsx"; // Replace "../path/to" with the actual path to the CoinMenu component
import CoinDetails from "../pieces/CoinDetails.jsx"; // Replace "../path/to" with the actual path to the CoinDetails component

export default function MarketScope() {
  const [cryptoObject, setCryptoObject] = useState(useLoaderData());
  const [renderedCoin, setRenderedCoin] = useState(cryptoObject.data[0]);

  // useEffect(() => {
  //   // Fetch data from the API and set the cryptoArray state
  //   fetch("https://api.coincap.io/v2/assets")
  //     .then((response) => response.json())
  //     .then((cryptoObject) => {
  //       const cryptoArray = cryptoObject.data;
  //       setCryptoArray(cryptoArray);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  // }, []);

  // You need to set the initial values for name, symbol, price, and imgSource
  // Here, we'll use the first coin in the cryptoArray as an example
  // const emptyCoin = {
  //   name: "No Coin Selected.",
  //   symbol: "No Symbol Provided.",
  //   price: "No Price Provided.",
  //   imgSource:
  //     "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg",
  // };

  if (cryptoObject.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <CoinMenu cryptoArray={cryptoObject.data} />
        <CoinDetails renderedCoin={renderedCoin} />
      </div>
    );
  }
}
