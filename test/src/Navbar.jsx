import React, { useState } from "react";
import lumenlogo from "./assets/lumenlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setActive] = useState("false");
  function myHamburger() {
    setActive(!isActive);
  }

  return (
    <>
      <header className="fixed w-full ">
        <nav className="bg-gradient-to-r from-orange-400 to-orange-500">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={lumenlogo} className="w-40" />
            </a>

            {/* for hamburger 3 lines */}

            <button onClick={myHamburger} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black   " aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>


            <div className={isActive ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"}>
              <ul className="font-medium  text-m flex flex-col p-4 md:p-0  border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                  <Link to="/" className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  " aria-current="page">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                </li>
                <li>
                  <Link to="/lumen1" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lumen1</Link>
                </li>
                <li>
                  <Link to="/lumen2" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lumen2</Link>
                </li>
                <li>
                  <Link to="/lumen3" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lumen3</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-[5em] w-full ">
      </div>
    </>
  );
}
export default Navbar
