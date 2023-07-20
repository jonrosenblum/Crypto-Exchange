import React, { useState } from "react";

export default function BuySell() {
  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);
  const [accountBalance, setAccountBalance] = useState(10000); // Initial account balance

  const handleBuyOrderSubmit = (price, quantity, coin) => {
    setBuyOrders((prevOrders) => [
      ...prevOrders,
      {
        price: Number(price),
        quantity: Number(quantity),
        coin,
        id: Date.now(),
      },
    ]);
  };

  const handleSellOrderSubmit = (price, quantity, coin) => {
    setSellOrders((prevOrders) => [
      ...prevOrders,
      {
        price: Number(price),
        quantity: Number(quantity),
        coin,
        id: Date.now(),
      },
    ]);
  };

  const handleBuyOrderCancel = (orderId) => {
    setBuyOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const handleSellOrderCancel = (orderId) => {
    setSellOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  return (
    <div>
      <h2>Order Book</h2>
      <div>
        <div>
          <h3>Buy Orders</h3>
          <ul>
            {buyOrders.map((order) => (
              <li key={order.id}>
                Coin: {order.coin} - Price: ${order.price} - Quantity:{" "}
                {order.quantity}{" "}
                <button onClick={() => handleBuyOrderCancel(order.id)}>
                  Cancel
                </button>
              </li>
            ))}
          </ul>
          <OrderForm onSubmit={handleBuyOrderSubmit} type="buy" />
        </div>
        <div>
          {/* Placeholder for market data chart */}
          <div className="market-data-chart">
            <h3>Market Data Chart (Buy)</h3>
            {/* Add your market data chart component for Buy here */}
            <p>Market data chart placeholder (Buy)</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Sell Orders</h3>
          <ul>
            {sellOrders.map((order) => (
              <li key={order.id}>
                Coin: {order.coin} - Price: ${order.price} - Quantity:{" "}
                {order.quantity}{" "}
                <button onClick={() => handleSellOrderCancel(order.id)}>
                  Cancel
                </button>
              </li>
            ))}
          </ul>
          <OrderForm onSubmit={handleSellOrderSubmit} type="sell" />
        </div>
        <div>
          {/* Placeholder for market data chart */}
          <div className="market-data-chart">
            <h3>Market Data Chart (Sell)</h3>
            {/* Add your market data chart component for Sell here */}
            <p>Market data chart placeholder (Sell)</p>
          </div>
        </div>
      </div>
      {/* Rest of the code */}
    </div>
  );
}

function OrderForm({ onSubmit, type }) {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [coin, setCoin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(price, quantity, coin);
    setPrice("");
    setQuantity("");
    setCoin("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          step="0.01"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label>Coin:</label>
        <input
          type="text"
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
        />
      </div>
      <button type="submit">{type === "buy" ? "Buy" : "Sell"}</button>
    </form>
  );
}
