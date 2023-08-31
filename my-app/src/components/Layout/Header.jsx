import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav.jsx";
import Input from "../Input";

function Header() {
  return (
    <div
      className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent py-5"
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-30 max-w-full px-4">
            <NavLink to="/" className="navbar-logo block w-full py-5">
              <h1 className="text-2xl font-semibold">Cryptox</h1>
            </NavLink>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div className="w-6/12">
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
              </button>
              <Nav />
            </div>
            <form className="w-6/12 hidden justify-end items-center pr-16 sm:flex lg:pr-0">
              <div className="flex">
                <Input placeholder="Email" />
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex">
                <a
                  href="signin.html"
                  className="loginBtn py-3 px-4 text-base font-medium  hover:opacity-70"
                >
                  Login
                </a>
                <a
                  href="signup.html"
                  className="signUpBtn rounded-lg bg-primary py-3 px-4 text-white font-medium  duration-300 ease-in-out hover:bg-opacity-90"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

{/* <header className="">
  <NavLink to="/">
    <h1>Cryptox</h1>
  </NavLink>
  <Nav />
  <form>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button type="submit">Sign Up</button>
    <button type="submit">Login</button>
  </form>
</header> */}