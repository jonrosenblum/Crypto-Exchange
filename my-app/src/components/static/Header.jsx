import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav.jsx";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Cryptox</h1>
      </NavLink>
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
