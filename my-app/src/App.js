import React, { useEffect, useState } from 'react';
import CoinDetails from './components/CoinDetails';
import Header from './components/Header';
import WatchList from './components/WatchList';
import CoinChange from './components/CoinChange';
import CoinMenu from './components/CoinMenu';
import { fetchCryptoData } from './api';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetchCryptoData()
      .then(data => setCryptoData(data))
      .catch(error => {
        console.error("Error: ", error)
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <CoinMenu cryptoData={cryptoData} />
      <CoinDetails cryptoData={cryptoData} />
      <CoinChange cryptoData={cryptoData} />
      <WatchList cryptoData={cryptoData} />
    </div>
  );
}

export default App;
