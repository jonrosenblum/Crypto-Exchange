import React from "react";

function Header() {
  return (
    <header>
      <h1>Cryptox</h1>
      <form>
        <p>Are you ready? Loading....</p>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        <button type="submit">Login</button>
      </form>
    </header>
  );
}

export default Header;
