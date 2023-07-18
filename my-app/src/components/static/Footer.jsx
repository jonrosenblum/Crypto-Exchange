import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>Footer Menu @ Jon Rosenblum</div>
      <nav>
        <NavLink to="/">Go Home</NavLink>
        <NavLink to="/policies">Examine Store Policies</NavLink>
      </nav>
    </>
  );
}
