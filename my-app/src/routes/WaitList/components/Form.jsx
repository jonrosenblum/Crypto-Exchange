import Input from "../../../components/Input";
import React, { useState } from "react";

const Form = () => {
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
    <form className="" onSubmit={submit}>
      <div class="mt-6 mx-auto flex max-w-md gap-x-4">
        <label for="email-address" class="sr-only">Email address</label>
        <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Join Waitlist</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Form;
