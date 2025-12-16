import React from "react";

import { useEffect, useState } from "react";
import { fetchMeals } from "../api/mealApi";
import MealCard from "../components/MealCard";

const Menu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals().then(data => setMeals(data));
   
  }, []);

  return (<>
           <h1 className="text-3xl font-bold p-8 z-10  dark:bg-gray-900 shadow-md p-4 transition-colors duration-500 dark:text-gray-100   
           ">Menu</h1>

    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6   dark:bg-gray-900 shadow-md p-4 transition-colors duration-500 dark:text-gray-100">

      {meals.map(meal=> <MealCard key={meal.id} meal={meal}  />)}
    </div>
    </>
  );
};

export default Menu;
