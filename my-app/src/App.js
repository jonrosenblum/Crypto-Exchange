// import React, { useEffect, useState } from 'react';
import CoinDetails from './components/CoinDetails';
import Header from './components/Header';
import WatchList from './components/routes/WatchList';
import CoinChange from './components/CoinChange';
import CoinMenu from './components/CoinMenu';
import { useState, useEffect } from 'react';

function App() {

  const [cryptoArray, setCryptoArray] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then(response => response.json())
      .then(cryptoObject => {
        const fetchedArray = cryptoObject.data;
        fetchedArray.forEach(coin => {
          coin.imgSource = `./assets/images/${coin.symbol.toLowerCase()}.png`
        });
        setCryptoArray(fetchedArray);
        console.log(fetchedArray);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <CoinMenu cryptoArray={cryptoArray} />
      <CoinDetails />
      <CoinChange />
      <WatchList />
    </div>
  );
}

export default App;
