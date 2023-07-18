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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Welcome />
      },
      {
        path: "market-scope",
        element: <MarketScope />
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