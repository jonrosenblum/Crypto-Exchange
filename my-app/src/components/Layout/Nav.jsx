import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      id="navbarCollapse"
      className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
    >
      <ul className="blcok lg:flex">
        <li className="group relative">
          <NavLink to="market-scope" className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg: lg:group-hover: lg:group-hover:opacity-70">Market Scope</NavLink>
        </li>
        <li className="group relative">
          <NavLink to="watch-list" className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg: lg:group-hover: lg:group-hover:opacity-70">My Watchlist</NavLink>
        </li>
        <li className="group relative">
          <NavLink to="wait-list" className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg: lg:group-hover: lg:group-hover:opacity-70">Join Waitlist</NavLink>
        </li>
      </ul>
    </nav>
  );
}