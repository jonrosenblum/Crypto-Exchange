import { Outlet } from "react-router";
import CoinDetails from "../pieces/CoinDetails.jsx";
import CoinMenu from "../pieces/CoinMenu.jsx";

export default function MarketScope() {
  return (
    <div>
      <CoinDetails />
      {/* <CoinMenu /> */}
    </div>
  );
}
