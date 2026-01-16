import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city) return alert("Enter city");
    navigate(`/hotels?city=${city}`);
  };

  return (
    <div>
      <h2>Search Hotels</h2>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Home;
