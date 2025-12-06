export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING": {
      const conflict = state.bookings.find(
        b => b.date === action.payload.date && b.time === action.payload.time
      );
      if (conflict) {
        alert("This time is already booked!");
        return state;
      }
      return { ...state, bookings: [...state.bookings, action.payload] };
    }

    case "REMOVE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.filter(b => b.id !== action.payload)
      };

    default:
      return state;
  }
};
