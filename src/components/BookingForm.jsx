import React from "react";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/CombinedContext";

const times = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30"];

const BookingForm = () => {
  const { dispatch, state } = useContext(AppContext);
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState(times[0]);
  const [people, setPeople] = useState(2);

  const handleSubmit = e => {
    e.preventDefault();
    const conflict = state.bookings.find(b => b.date === date && b.time === time);
    if (conflict) {
      alert("This time is already booked!");
      
      return;
    }
    dispatch({ type: "ADD_BOOKING", payload: { id:  Date.now(), date, time, people }});
    navigate("/booked");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6  bg-white rounded shadow-md max-w-md mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100  ">
      <label className="block mb-2 ">Date:</label>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border p-2 w-full mb-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100" required />

      <label className="block mb-2">Time:</label>
      <select value={time} onChange={e => setTime(e.target.value)} className="border p-2 w-full mb-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {times.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <label className="block mb-2">People:</label>
      <input type="number" min="1" max="10" value={people} onChange={e => setPeople(e.target.value)} className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 border p-2 w-full mb-4" />

      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">Reserve</button>
    </form>
  );
};

export default BookingForm;
