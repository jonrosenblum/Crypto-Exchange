import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <p>404 Not Found!</p>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
}
