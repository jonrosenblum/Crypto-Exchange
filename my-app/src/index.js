import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './static/Root';
import Welcome from './routes/Welcome';
import MarketScope from './routes/MarketScope';
import WaitList from './routes/WaitList';
import WatchList from './routes/WatchList';
import Error from './static/Error';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css';


const fetchAndCurateCoinData = async () => {
  return fetch("https://api.coincap.io/v2/assets")
    .then((response) => response.json())
    .then(cryptoObject => {
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
        element: <WatchList />,
        loader: fetchAndCurateCoinData
      },
      {
        path: "wait-list",
        element: <WaitList />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();