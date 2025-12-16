import React, { useContext, useState } from "react";
import { AppContext } from "../context/CombinedContext";
import ReservationCard from "../components/ReservationCard";

const Booked = () => {
  const { state } = useContext(AppContext);

  const [reseved, setReseved] = useState([
    { id: 1, date: "29 Oct 2025", time: "19:30", people: 2 },
    { id: 2, date: "30 Oct 2025", time: "21:00", people: 4 },
    { id: 3, date: "1 Nov 2025", time: "18:00", people: 3 },
  ]);

  const handleDelete = (id) => {
    setReseved((prev) => prev.filter((b) => b.id !== id));
  };

  const noReservations = reseved.length === 0 && state.bookings.length === 0;

  return (
    <div className="p-8 min-h-screen bg-slate-100 mx-auto dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">My Reservations</h1>

      {noReservations ? (
        <p>We have no reservations yet.</p>
      ) : (
        <>
          {reseved.length > 0 && (
            <div className="flex flex-wrap sm:grid-cols-2 gap-6 mb-10">
              {reseved.map((reserve) => (
                <div
                  key={reserve.id}
                  className="border p-4 rounded shadow hover:shadow-lg transition w-64"
                >
                  <p><strong>Date:</strong> {reserve.date}</p>
                  <p><strong>Time:</strong> {reserve.time}</p>
                  <p><strong>People:</strong> {reserve.people}</p>
                  <button
                    onClick={() => handleDelete(reserve.id)}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          )}

          {state.bookings.length > 0 && (
  <div className="flex flex-wrap gap-4">
    {state.bookings.map((booking) => (
      <ReservationCard key={booking.id} booking={booking} />
    ))}
  </div>
)}

        </>
      )}
    </div>
  );
};

export default Booked;
