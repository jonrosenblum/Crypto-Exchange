import { Outlet } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <p>
        Welcome to our cryptocurrency tracker app! Stay updated with real-time
        information about various cryptocurrencies, including their prices,
        market trends, and other relevant data. Explore the world of digital
        currencies and make informed investment decisions. Start tracking your
        favorite cryptocurrencies now!
      </p>
      <Outlet />
    </div>
  );
}
