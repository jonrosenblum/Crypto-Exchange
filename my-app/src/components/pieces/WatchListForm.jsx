import React, { useState } from "react";

const WatchListForm = ({ cryptoArray }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [symbol, setSymbol] = useState("");

  const symbolExistsInWatchList = (symbol) => {
    return watchlist.some((item) => item.symbol === symbol);
  };

  const handleWatchlistSubmission = (event) => {
    event.preventDefault();
    const symbolInput = symbol.trim().toUpperCase();

    if (symbolExistsInWatchList(symbolInput)) {
      // Symbol already exists in watchlist
      alert(`The symbol ${symbolInput} is already in the watchlist.`);
    } else {
      const coin = cryptoArray.find(
        (item) => item.symbol.toUpperCase() === symbolInput
      );
      if (coin) {
        setWatchlist((prevWatchlist) => [
          ...prevWatchlist,
          {
            symbol: coin.symbol,
            price: Number(coin.priceUsd).toFixed(2),
            imgSource: coin.imgSource,
          },
        ]);
        setSymbol("");
      } else {
        // Symbol not found in cryptoArray
        alert(`The symbol ${symbolInput} does not exist.`);
      }
    }
  };

  if (!cryptoArray || cryptoArray.length === 0) {
    // Return null or a loading message while the data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <div className="watchlist-container">
      <form onSubmit={handleWatchlistSubmission} className="watchlist-form">
        <label htmlFor="watchlist-input">Enter Symbol:</label>
        <input
          type="text"
          id="watchlist-input"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <button type="submit">Add to Watchlist</button>
      </form>
      <div className="watchlist-items">
        {watchlist.map((item, index) => (
          <div key={index} className="watchlist-item">
            <img
              src={item.imgSource}
              alt={item.symbol}
              className="coin-image"
            />
            <span>
              {item.symbol} - ${item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListForm;
