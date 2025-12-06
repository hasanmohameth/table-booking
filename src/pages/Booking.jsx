import React from "react";

import BookingForm from "../components/BookingForm";

const Booking = () => {
  return (
    <div className="p-8 dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-screen">
      <h1 className="text-3xl font-bold mb-6">Reserve Your Table</h1>
      <BookingForm />
    </div>
  );
};

export default Booking;
