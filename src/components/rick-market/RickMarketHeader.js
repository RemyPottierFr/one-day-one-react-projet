import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faPowerOff } from "@fortawesome/free-solid-svg-icons";

function RickMarketHeader() {
  const [burgerMenu, toggleBurgerMenu] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 z-10 w-full">
      <div className="grid grid-cols-5 p-4 items-center w-full lg:10/12 mx-auto">
        <Link to="/rick-market">
          <img
            src="https://pbs.twimg.com/profile_images/636792998060257280/AUodHMe3_400x400.png"
            className="w-20 h-20 rounded-full transition-all duration-200 shadow-lg"
            alt="RMlogo"
          />
        </Link>
        <div className="md:hidden"></div>
        <div className="md:hidden"></div>
        <div className="md:hidden"></div>
        <div className="md:hidden">
          <button
            className="flex flex-col shadow-md rounded p-2 focus:outline-none"
            onClick={() => toggleBurgerMenu(!burgerMenu)}
          >
            <span className="w-8 h-2 shadow-inner-md mb-1"></span>
            <span className="w-8 h-2 shadow-inner-md mb-1"></span>
            <span className="w-8 h-2 shadow-inner-md"></span>
          </button>
        </div>
        <div
          className={`items-center ${
            !burgerMenu
              ? "md:grid hidden grid-cols-4 col-span-4"
              : "grid grid-cols-1 col-span-5 my-4 row-gap-4"
          }`}
        >
          <div></div>
          <div></div>
          <Link to="/rick-market/cart" className="flex justify-center">
            <button className="px-4 py-2 text-blue-700 text-2xl font-hairline rounded transition-all duration-500 shadow-lg hover:shadow-inner-lg">
              <FontAwesomeIcon icon={faCartArrowDown} className="mr-2" />
              Cart
            </button>
          </Link>
          <Link to="/" className="flex justify-center">
            <button className="px-4 py-2 text-blue-700 text-2xl font-hairline rounded transition-all duration-500 shadow-lg hover:shadow-inner-lg">
              <FontAwesomeIcon icon={faPowerOff} className="mr-2" />
              Get-out
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default RickMarketHeader;
