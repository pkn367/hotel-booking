import { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  // Load bookings on page load
  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  // ✅ Cancel booking
  const handleCancel = (id) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div>
      <h1>My Bookings</h1>

      {bookings.length === 0 && <p>No bookings found</p>}

      {bookings.map((booking) => (
        <div key={booking.id} className="booking-card">
          <h2>{booking.hotelName}</h2>
          <p>City: {booking.city}</p>
          <p>Price: ₹{booking.price}</p>
          <p>Booked On: {booking.bookedOn}</p>

          {/* ✅ Cancel Button */}
          <button onClick={() => handleCancel(booking.id)}>
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;

