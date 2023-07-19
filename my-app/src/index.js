import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root.jsx";
import Welcome from './components/routes/Welcome.jsx';
import MarketScope from './components/routes/MarketScope';
import WaitList from './components/routes/WaitList';
import WatchList from './components/routes/WatchList';
import Error from './components/Error';
import './index.css';

const fetchAndCurateCoinData = async () => {
  return fetch("https://api.coincap.io/v2/assets")
    .then((response) => response.json())
    .then(cryptoObject => {
      // const fetchedArray = cryptoObject.data;
      // console.log(cryptoObject.data)
      cryptoObject.data.forEach(coin => {
        coin.imgSource = `/images/${coin.symbol.toLowerCase()}.png`
      });
      console.log(cryptoObject.data)
      return cryptoObject
    })
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />, // It turns out that we need to fix this so it only renders on an actual 404.
    children: [
      {
        path: "/",
        element: <Welcome />
      },
      {
        path: "market-scope",
        element: <MarketScope />,
        loader: fetchAndCurateCoinData
      },
      {
        path: "watch-list",
        element: <WatchList />
      },
      {
        path: "wait-list",
        element: <WaitList />
      },
      {
        path: "policies",
        element: <h1>Welcome to the Policy Section!</h1>
      }
    ]
  },
  {
    path: "/secret",
    element: <img src="https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg" alt="happy boi"></img>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();