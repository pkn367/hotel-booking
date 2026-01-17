export const getBookings = () => {
  return JSON.parse(localStorage.getItem("bookings")) || [];
};

export const saveBooking = (booking) => {
  const existing = getBookings();
  localStorage.setItem(
    "bookings",
    JSON.stringify([...existing, booking])
  );
};

export const deleteBooking = (id) => {
  const updated = getBookings().filter(b => b.id !== id);
  localStorage.setItem("bookings", JSON.stringify(updated));
};
