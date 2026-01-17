import { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  const cancelBooking = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id} style={styles.card}>
            {/* ✅ HOTEL NAME */}
            <h2 style={styles.hotelName}>{booking.hotelName}</h2>

            <p><strong>City:</strong> {booking.city}</p>
            <p><strong>Price:</strong> ₹{booking.price} / night</p>
            <p><strong>Rating:</strong> ⭐ {booking.rating}</p>
            <p><strong>Booked On:</strong> {booking.bookedOn}</p>

            <button
              style={styles.cancelBtn}
              onClick={() => cancelBooking(booking.id)}
            >
              Cancel
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
  },
  heading: {
    marginBottom: "30px",
  },
  card: {
    border: "1px solid #915757",
    padding: "25px",
    marginBottom: "25px",
    borderRadius: "12px",
    backgroundColor: "#1e293b",
  },
  hotelName: {
    marginBottom: "12px",
    color: "#facc15",
    fontSize: "22px",
  },
  cancelBtn: {
    marginTop: "15px",
    padding: "8px 18px",
    backgroundColor: "#b30000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default MyBookings;

