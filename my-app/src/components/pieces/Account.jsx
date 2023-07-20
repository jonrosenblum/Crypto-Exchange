import React from "react";
import "./account.css"; // Import the CSS file

export default function Account() {
  // Simulate user data - Replace this with your actual user data
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    balance: 1000, // USD balance
    cryptoHoldings: [
      { name: "Bitcoin", symbol: "BTC", amount: 0.5 },
      { name: "Ethereum", symbol: "ETH", amount: 5 },
      // Add more crypto holdings here
    ],
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logged out!");
  };

  return (
    <div className="container">
      <h2>Welcome, {userData.name}!</h2>
      <p>Email: {userData.email}</p>
      <p>Account Balance: ${userData.balance}</p>

      <div className="cryptoHoldings">
        <h3>Crypto Holdings</h3>
        <ul>
          {userData.cryptoHoldings.map((crypto, index) => (
            <li key={index}>
              {crypto.name} ({crypto.symbol}) - {crypto.amount} units
            </li>
          ))}
        </ul>
      </div>

      <div className="accountOptions">
        <h3>Account Options</h3>
        <ul>
          <li>
            <button className="button">Deposit Funds</button>
          </li>
          <li>
            <button className="button">Withdraw Funds</button>
          </li>
          <li>
            <button className="button">Buy Cryptocurrency</button>
          </li>
          <li>
            <button className="button">Sell Cryptocurrency</button>
          </li>
          <li>
            <button className="button">Transfer Cryptocurrency</button>
          </li>
          <li>
            <button className="button">Settings</button>
          </li>
          <li>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
