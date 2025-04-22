import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import burger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);

  return (
    <header className="absolute w-full">
      <section className="flex justify-between pl-5 py-8 items-center">
        <img src={logo} alt="logo" />
        <nav className="lg:bg-white/10 lg:backdrop-blur-sm lg:tracking-wider py-2 lg:px-20 px-10 ">
          {!showMenu && (
            <img
              src={burger}
              alt="hamburger"
              className="md:hidden cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}

          <div
            className={`absolute z-50 bg-white/10 backdrop-blur-md h-screen top-0  right-0 w-8/12 p-10 transition-all duration-300 ease-in-out transform ${
              showMenu
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={close}
              alt="close icon"
              className="absolute right-10 cursor-pointer w-6"
              onClick={() => setShowMenu(false)}
            />
            <ul className="flex flex-col items-start justify-center gap-6 mt-32 ">
              <li className="text-white text-lg">
                <a href="/">
                  <span className="font-bold">00</span> Home
                </a>
              </li>
              <li className="text-white text-lg">
                <a href="/destination">
                  <span className="font-bold">01</span> Destination
                </a>
              </li>
              <li className="text-white text-lg">
                <a href="/crew">
                  <span className="font-bold">02</span> Crew
                </a>
              </li>
              <li className="text-white text-lg">
                <a href="/technology">
                  <span className="font-bold">03</span> Technology
                </a>
              </li>
            </ul>
          </div>

          <ul className="hidden md:flex items-center justify-center gap-32 mr-10">
            <li className="text-white text-md p-4">
              <a href="#">
                <span className="font-bold">00</span> Home
              </a>
            </li>
            <li className="text-white text-md p-4">
              <a href="#">
                <span className="font-bold">01</span> Destination
              </a>
            </li>
            <li className="text-white text-md p-4">
              <a href="#">
                <span className="font-bold">02</span> Crew
              </a>
            </li>
            <li className="text-white text-md p-4">
              <a href="#">
                <span className="font-bold">03</span> Technology
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
export default Navbar;
