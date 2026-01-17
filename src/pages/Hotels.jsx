import { useState } from "react";
import { useNavigate } from "react-router-dom";


import hotelsData from "../data/hotels";
import { saveBooking } from "../utils/bookingStorage";

export default function Hotels() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToBookings = () => {
    navigate("/bookings");
  };

  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState("");


  const searchHotels = () => {
    let results = hotelsData.filter(
      (hotel) =>
        hotel.city.toLowerCase() === city.trim().toLowerCase() &&
        hotel.price <= maxPrice
    );

    if (sortBy === "low") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    }

    setFilteredHotels(results);
  };


  const bookHotel = (hotel) => {
    const booking = {
      id: Date.now(),
      name: hotel.name,
      city: hotel.city,
      price: hotel.price,
      date: new Date().toLocaleDateString(),
    };

    saveBooking(booking);
    alert("Hotel booked successfully!");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="page">
      <h1>Search Hotels</h1>

      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={searchHotels}>Search</button>
      <div style={{ marginTop: "10px" }}>
        <label>Max Price: ₹{maxPrice}</label>
        <br />
        <input
          type="range"
          min="1000"
          max="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <br />

      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>

      <hr />

      {filteredHotels.length === 0 && <p>No hotels found</p>}

      {filteredHotels.map((hotel) => (
        <div key={hotel.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
          <h3>{hotel.name}</h3>
          <p>City: {hotel.city}</p>
          <p>Price: ₹{hotel.price}/night</p>
          <p>Rating: ⭐ {hotel.rating}</p>

          <button onClick={() => bookHotel(hotel)}>Book Now</button>
        </div>
      ))}

      <br />
      <button onClick={() => navigate("/my-bookings")}>My Bookings</button>
      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
