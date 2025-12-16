import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RestaurantCard = ({ title, description, image, index }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * 600); 
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform dark: transition-colors duration-500"
        >
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-900 dark: transition-colors duration-500 dark:text-gray-100">{description}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default RestaurantCard;
