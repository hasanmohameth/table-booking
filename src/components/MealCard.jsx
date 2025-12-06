import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MealCard = ({ meal }) => {
  const [seeDescription, setSeeDescription] = useState(false);
  console.log(meal)

  return (
<div className="  self-start border rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform w-96">
      <img
        src={meal.image}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <h5 className="p-3">{meal.strMeal}</h5>
      <div className="p-2">
        <p className="text-gray-600">
          Price: ${(meal.price + 56.98).toFixed(2)}
        </p>

        <AnimatePresence>
          {seeDescription && (
            <motion.p
              key="description"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="line-clamp-5 overflow-hidden mt-2"
            >
              {meal.strArea}
            </motion.p>
          )}
        </AnimatePresence>

        <p
          className="text-blue-500 hover:underline cursor-pointer "
          onClick={() => setSeeDescription(!seeDescription)}
        >
          {seeDescription ? "Hide" : "Origin"}
        </p>
      </div>
    </div>
  );
};


export default MealCard;
