import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>@ 2023 Cryptox</div>
      <nav>
        <NavLink to="/">Go Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/developers">Developers</NavLink>
      </nav>
    </>
  );
}
