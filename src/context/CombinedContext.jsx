import React, { createContext, useReducer, useState, useEffect } from "react";
import { bookingReducer } from "../reducers/bookingReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

useEffect(() => {
  const body = document.body;
  if (darkMode) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  localStorage.setItem("darkMode", darkMode);
}, [darkMode]);

  // Booking
  const [state, dispatch] = useReducer(bookingReducer, { bookings: [] });

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
