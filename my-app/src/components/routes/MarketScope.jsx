import CoinDetails from "../pieces/CoinDetails.jsx";
import CoinMenu from "../pieces/CoinMenu.jsx";
import { useState, useEffect } from "react";

export default function MarketScope() {
  const [cryptoArray, setCryptoArray] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set the cryptoArray state
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((cryptoObject) => {
        const cryptoArray = cryptoObject.data;
        setCryptoArray(cryptoArray);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <CoinDetails />
      <CoinMenu cryptoArray={cryptoArray} />
    </div>
  );
}
