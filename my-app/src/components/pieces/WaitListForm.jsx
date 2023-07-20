import React, { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission delay for demonstration purposes
    setIsLoading(true);
    setTimeout(() => {
      console.log("Email submitted:", email);
      setIsSubscribed(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h2>Join Our Waitlist</h2>
      {isSubscribed ? (
        <div>
          <p>Thank you for joining our waitlist!</p>
          <p>You will receive updates and news about our web application.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your email to join:
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Joining..." : "Join"}
          </button>
        </form>
      )}
    </div>
  );
}
