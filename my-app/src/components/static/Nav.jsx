import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="market-scope">Market Scope</NavLink>
      <NavLink to="watch-list">My Watchlist</NavLink>
      <NavLink to="wait-list">Join Waitlist!</NavLink>
    </nav>
  );
}
