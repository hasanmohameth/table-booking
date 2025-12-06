import { useState } from "react";
import React from "react";

const About = () => {
  const [isLoading, setIsLoading] =  useState(true); 

  return (
    <div className="p-8 mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">About Our Restaurant</h1>
      <p className="mb-6">
        Located in the heart of NYC, our restaurant offers a luxurious dining experience.
        Enjoy exquisite dishes, elegant ambiance, and world-class service.
      </p>

      <div className="mb-6">
        <div className="relative w-full h-[400px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-10">
              <span className="text-2xl">Loading map...</span>
            </div>
          )}

          <iframe
            title="restaurant-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.970088435162!2d-74.00791711708442!3d40.75119085932805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bfc3e29bd5%3A0x71e84703e2c37e4c!2sThe%20Landing!5e0!3m2!1sen!2s!4v1761596378706!5m2!1sen!2s"
            width="100%"
            height="400"
            className="border-0 rounded"
            allowFullScreen=""
            loading="lazy"

            onLoad={() => setIsLoading(false)} 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
