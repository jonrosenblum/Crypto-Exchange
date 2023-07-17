// import React, { useEffect, useState } from 'react';
import CoinDetails from './components/CoinDetails';
import Header from './components/Header';
import WatchList from './components/WatchList';
import CoinChange from './components/CoinChange';
import CoinMenu from './components/CoinMenu';

function App() {

  fetch("https://api.coincap.io/v2/assets")
    .then(response => response.json())
    .then(cryptoObject => { console.log(cryptoObject) })


  return (
    <div className="app">
      <Header />
      <CoinMenu />
      <CoinDetails />
      <CoinChange />
      <WatchList />
    </div>
  );
}

export default App;
