import { Outlet } from "react-router-dom";
//import ".src/index.css";

export default function Welcome() {
  return (
    <div>
      <p className="welcome-p">
        Welcome to our cryptocurrency tracker app! Stay updated with real-time
        information about various cryptocurrencies, including their prices,
        market trends, and other relevant data. Explore the world of digital
        currencies and make informed investment decisions. Start tracking your
        favorite cryptocurrencies now!
      </p>
      <div className="main-graphic">
        <img src="public/images/icons/main-graphic.png" alt="main graphic"/>
      </div>
      <Outlet />
    </div>
  );
}
