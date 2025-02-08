import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-bgColor p-5 max-[1920px] w-full font-Inter   top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold cursor-pointer">
          <img className="w-[125px] h-[60px] inline" src="/Logo.svg" alt="logo" />
        </span>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            <ion-icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        <ul
          className={`md:flex text-[12px] text-rOrange md:items-center md:space-x-8 absolute md:static bg-bgColor w-full left-0 md:w-auto py-4 md:py-0 text-center transition-all duration-500 ease-in ${
            menuOpen
              ? "top-16 opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          <li>
            <a href="#" className="block py-2 md:py-0   duration-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0   duration-500">
              Why Compound Bay?
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0   duration-500">
              Safe Harbor
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0   duration-500">
              Deal Tracker
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0   duration-500">
              Price Tracker
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block  border-[2px] border-rOrange p-[6px] px-[10px] rounded-[50px] mobile:px-[5px]   duration-500"
            >
              Join or Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
