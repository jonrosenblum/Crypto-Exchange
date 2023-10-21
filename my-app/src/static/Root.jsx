import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
