import React from "react";
import Nav from "./Nav.jsx";

function Header() {
  return (
    <header>
      <h1>Cryptox</h1>
      <Nav />
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        <button type="submit">Login</button>
      </form>
    </header>
  );
}

export default Header;
