import React, { useContext } from "react";
import { AppContext } from "../context/CombinedContext";

const ReservationCard = ({ booking }) => {
  const { dispatch } = useContext(AppContext);

  const handleCancel = () => {
    dispatch({ type: "REMOVE_BOOKING", payload: booking.id });
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition w-64 m-1">
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>People:</strong> {booking.people}</p>
      <button
        onClick={handleCancel}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cancel
      </button>
    </div>
  );
};

export default ReservationCard;
