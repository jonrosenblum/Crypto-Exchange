import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      {/* <NavLink to="/"> Home</NavLink> */}
      <NavLink to="market-scope">Market Scope</NavLink>
      <NavLink to="watch-list">My Watchlist</NavLink>
      <NavLink to="buy-sell">Buy and Sell</NavLink>
      <NavLink to="wait-list">Join Waitlist!</NavLink>
      <NavLink to="account">My Account</NavLink>
    </nav>
  );
}
