import React, { useState } from "react";

const CoinChange = ({ cryptoArray }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const coinsPerPage = 10;

  const handleCoinClick = (coin) => {
    // Implement the logic for handling coin click (e.g., showing coin details)
    console.log("Coin clicked:", coin);
  };

  const renderCoinChangeItems = () => {
    const start = currentPage * coinsPerPage;
    const end = start + coinsPerPage;
    const displayedCoins = cryptoArray.slice(start, end);

    return displayedCoins.map((coin) => {
      const roundedChange = Math.round(coin.changePercent24Hr * 10) / 10;
      const backgroundColor =
        coin.changePercent24Hr < 0 ? "lightcoral" : "lightgreen";

      return (
        <div
          key={coin.symbol}
          className="coin-change"
          style={{ backgroundColor }}
          onClick={() => handleCoinClick(coin)}
        >
          <p>{`${coin.name} (${coin.symbol})`}</p>
          <p>Percent Change: {roundedChange}%</p>
        </div>
      );
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
    <div>
      <div id="coin-change-container">{renderCoinChangeItems()}</div>
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
};

export default CoinChange;
