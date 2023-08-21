import { Outlet } from "react-router-dom";
import Footer from "./static/Footer.jsx";
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
