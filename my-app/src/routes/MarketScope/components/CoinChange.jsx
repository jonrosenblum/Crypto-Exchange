import React, { useState } from "react";
import CoinChangeItem from "./CoinChangeItem";

export default function CoinChange({ cryptoArray }) {
  const [currentPage, setCurrentPage] = useState(0);
  const coinsPerPage = 10;

  const start = currentPage * coinsPerPage;
  const end = start + coinsPerPage;
  const displayedCoins = cryptoArray.slice(start, end);

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
    <div className="mt-7">
      <table className="w-full table">
        <thead>
          <tr className="border-b text-dark text-sm font-semibold">
            <th className="py-3 px-4 text-left">Currency</th>
            <th className="py-3 px-4 text-left">Percent Change</th>
          </tr>
        </thead>
        <tbody>
          {displayedCoins.map(coin => <CoinChangeItem coin={coin} />)}
        </tbody>
      </table>
      <div className="m-auto  flex justify-between gap-4 mt-10">
        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="w-1/2 p-2 bg-gray-200 text-dark text-sm rounded font-semibold">
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(cryptoArray.length / coinsPerPage) - 1
          }
          className="p-2 bg-gray-200 text-dark text-sm rounded font-semibold w-1/2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
