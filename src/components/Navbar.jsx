import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import burger from "../assets/shared/icon-hamburger.svg";

const Navbar = () => {
  return (
    <header className="absolute w-full">
      <section className="flex justify-between pl-5 py-8 items-center">
        <img src={logo} alt="logo" />
        <nav className="bg-white/10 backdrop-blur-sm tracking-wider py-2 px-20 ">
          <img src={burger} alt="hamburger" className="md:hidden" />
          <ul className="hidden md:flex items-center justify-center gap-32 mr-10 ">
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
