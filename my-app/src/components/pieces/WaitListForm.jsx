import React, { useState } from "react";
import "./waitlist.css";

const WaitlistForm = () => {
  function Form() {
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const submit = async (e) => {
      e.preventDefault();
      let response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });
      if (response.ok) {
        setHasSubmitted(true);
      } else {
        setError(await response.text());
      }
    };

    if (hasSubmitted) {
      return (
        <div className="form-wrapper">
          <span className="subtitle">
            Thanks for signing up! We will be in touch soon.
          </span>
        </div>
      );
    }

    return (
      <form className="form-wrapper" onSubmit={submit}>
        <input
          type="email"
          required
          placeholder="Email"
          className="formInput formTextInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="formInput formSubmitButton">
          Join Waitlist
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    );
  }

  return (
    <div className="container">
      <div className="column">
        <img width="154" height="27" src="/logo.svg" alt="Logo" />
        <h1 className="title">
          Join Our Waitlist
          <br />
        </h1>
        <div className="subtitle">
          Be the first to get access to our amazing crypto exchange platform!
          Sign up now to secure your spot on our waitlist and receive exciting
          updates and early access privileges.
        </div>
        <Form />
      </div>
      <div className="column">
        <img width="100%" height="100%" src="/code.svg" alt="Code" />
      </div>
    </div>
  );
};

export default WaitlistForm;
