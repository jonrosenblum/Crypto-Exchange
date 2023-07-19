import { Outlet } from "react-router";
import Nav from "./static/Nav.jsx";
import Footer from "./static/Footer.jsx";
import Header from "./static/Header.jsx";

export default function Root() {
  return (
    <div>
      <Header />
      <Nav />
      {/* `Outlet` defines Dynamic Children that change with Different Routes. */}
      <Outlet />
      <Footer />
    </div>
  );
}
