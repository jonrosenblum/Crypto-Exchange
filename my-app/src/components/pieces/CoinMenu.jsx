import React, { useState } from "react";

export default function CoinMenu({ cryptoArray }) {
  const [currentPage, setCurrentPage] = useState(0);
  const coinsPerPage = 10;

  const createCoinMenuItem = (symbol, name, price, imgSource) => {
    const parsedPrice = parseFloat(price);

    return (
      <li className="coin-item" key={symbol}>
        <p className="coin-name-symbol">{`${name} (${symbol})`}</p>
        <img
          className="coin-image"
          src={imgSource}
          onError={(e) => {
            e.target.src = "https://i.ibb.co/zRLmrMN/shitcoin.png";
          }}
          alt={symbol}
        />
        <p className="coin-price">{`Real-Time Price: $${parsedPrice.toFixed(
          2
        )}`}</p>
      </li>
    );
  };

  const renderCoinMenuItems = () => {
    if (!cryptoArray) {
      return null; // Return null or a loading message while the data is being fetched
    }

    const start = currentPage * coinsPerPage;
    const end = start + coinsPerPage;
    // console.log(cryptoArray);
    const displayedCoins = cryptoArray.slice(start, end);

    return displayedCoins.map((coin) => {
      const { symbol, name, priceUsd, imgSource } = coin;
      // console.log(imgSource);
      return createCoinMenuItem(symbol, name, priceUsd, imgSource);
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(cryptoArray.length / coinsPerPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="coin-menu">
      <ul className="coin-list">{renderCoinMenuItems()}</ul>
      <div className="pagination-buttons">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(cryptoArray.length / coinsPerPage) - 1
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
