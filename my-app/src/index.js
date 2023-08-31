import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Layout/Root";
import Welcome from './routes/Welcome';
import MarketScope from './routes/MarketScope';
import WaitList from './routes/WaitList';
import WatchList from './routes/WatchList';
import Error from './components/Layout/Error';
import MyPortfolio from './routes/MyPortfolio';
import 'swiper/css';
import 'swiper/css/navigation';
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
        element: <WatchList />,
        loader: fetchAndCurateCoinData
      },
      {
        path: "my-portfolio",
        element: <MyPortfolio />
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