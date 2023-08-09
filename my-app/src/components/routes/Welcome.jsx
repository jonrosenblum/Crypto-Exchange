import React from "react";
import { Outlet } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h1 className="welcome-title">Welcome to Cryptox</h1>
        <p className="welcome-subtitle">
          Stay updated with real-time information about various
          cryptocurrencies, including their prices, market trends, and other
          relevant data.
        </p>
        <p className="welcome-subtitle">
          Explore the world of digital currencies and make informed investment
          decisions. Start tracking your favorite cryptocurrencies now!
        </p>
      </div>
      <div className="main-graphic">
        {/* <img src="/images/icons/main-graphic.png" alt="main graphic" /> */}
      </div>
      <Outlet />
    </div>
  );
}
