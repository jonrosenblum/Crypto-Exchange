import React, { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, e.g., send the email to your backend
    console.log("Email submitted:", email);
    // Reset the input field after submission
    setEmail("");
  };

  return (
    <div>
      <h2>Join Our Waitlist</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email to join:
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default WaitlistForm;
