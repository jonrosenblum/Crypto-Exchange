import { Outlet } from "react-router";
//import Nav from "./static/Nav.jsx";
import Footer from "./static/Footer.jsx";
//import SideNav from "./static/SideNav.jsx";
import Header from "./static/Header.jsx";

export default function Root() {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}
