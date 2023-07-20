import React, { useState } from "react";

export default function OrderForm({ onSubmit, type }) {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(price, quantity);
    setPrice("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          step="0.01"
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          step="0.01"
          required
        />
      </label>
      <button type="submit">Submit {type} Order</button>
    </form>
  );
}
