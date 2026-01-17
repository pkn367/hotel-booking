import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hotelsData from "../data/hotels";

export default function Hotels() {
  const [city, setCity] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const navigate = useNavigate();

  const searchHotels = () => {
    const results = hotelsData.filter(
      (hotel) =>
        hotel.city.toLowerCase() === city.trim().toLowerCase()
    );
    setFilteredHotels(results);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="page">
      <h1>Search Hotels</h1>

      <input
        placeholder="Enter city (e.g. Chennai)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchHotels}>Search</button>

      <hr />

      {filteredHotels.length === 0 && (
        <p>No hotels found</p>
      )}

      {filteredHotels.map((hotel) => (
        <div
          key={hotel.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{hotel.name}</h3>
          <p>City: {hotel.city}</p>
          <p>Price: ₹{hotel.price}/night</p>
          <p>Rating: ⭐ {hotel.rating}</p>

          <button>Book Now</button>
        </div>
      ))}

      <br />

      <button onClick={() => navigate("/my-bookings")}>
        My Bookings
      </button>

      <br /><br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}
