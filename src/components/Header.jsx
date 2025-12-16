import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/CombinedContext";

const Header = () => {
  const links = [
    { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },

    { name: "Booking", path: "/booking" },
    { name: "Booked", path: "/booked" },
   { name: "About", path: "/about" },

    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const { darkMode, setDarkMode } = useContext(AppContext);



  return (

    <header className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          LUXURY NYC RESTURANT
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <nav className="flex gap-4">
  {links.map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className="flex flex-col items-center hover:text-blue-500 text-gray-700 dark:text-gray-300"
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? " flex flex-col items-center transition-all duration-500 text-gray-700 dark:text-gray-300 hover:text-blue-500 text-2xl" : ""}>
            {link.name}
          </span>
          {isActive && <span className="block w-2 h-0.5 bg-blue-500 rounded-full mt-1 "></span>}
        </>
      )}
    </NavLink>
  ))}
</nav>

          </div>

          <div
            className={`ml-4 mt-1 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
              darkMode ?  "bg-yellow-400":  "bg-gray-700"
            }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`w-6 h-6 rounded-full transition-transform duration-500 ${
                darkMode ? "translate-x-0 rotate-0" : "translate-x-0 rotate-45"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
