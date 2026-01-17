import { getBookings, deleteBooking } from "../utils/bookingStorage";
import { useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState(getBookings());

  const cancelBooking = (id) => {
    deleteBooking(id);
    setBookings(getBookings());
  };

  return (
    <div className="page">
      <h1>My Bookings</h1>

      {bookings.length === 0 && <p>No bookings yet.</p>}

      {bookings.map((b) => (
        <div key={b.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
          <h3>{b.name}</h3>
          <p>City: {b.city}</p>
          <p>Price: ₹{b.price}</p>
          <p>Booked On: {b.date}</p>

          <button onClick={() => cancelBooking(b.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}
