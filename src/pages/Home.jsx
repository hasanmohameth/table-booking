import React from "react";
import RestaurantCard from "../components/RestaurantCard";

import  { NavLink } from "react-router-dom";

import meal from "../components/images/meal.jpg";

import seafood from "../components/images/seafood.webp";
import dessert from "../components/images/dessert.jpg";

const promos = [
  { title: "Chef's Special Steak", description: "A luxurious steak dish.", image: meal },
{ title: "Seafood Delight", description: "Fresh seafood from the ocean.", image: seafood },
  { title: "Dessert Extravaganza", description: "Sweet treats to end your meal.", image: dessert },
];

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <img
        src="/2023-01-12.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/0 backdrop-blur-[7px] p-8 text-center text-gray-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Luxury NYC Restaurant</h1>
        <p className="mb-6">Enjoy the finest dining experience in New York City</p>
        <NavLink
          to="/booking"
          className="bg-sky-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-all duration-500 mb-8 inline-block"
        >
          Reserve a Table
        </NavLink>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <RestaurantCard key={index} index={index} {...promo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
