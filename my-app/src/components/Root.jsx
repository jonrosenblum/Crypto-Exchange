import { Outlet } from "react-router";

import Nav from "./static/Nav.jsx";
import Footer from "./static/Footer.jsx";



export default function Root() {
  return (
    <div>
      <Nav />
      {/* `Outlet` defines Dynamic Children that change with Different Routes. */}
      <Outlet />
      <Footer />
    </div>
  );
}
