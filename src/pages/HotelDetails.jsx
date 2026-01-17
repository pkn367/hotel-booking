import { useParams } from "react-router-dom";
import hotels from "../data/hotels";
import "./HotelDetails.css";


const HotelDetails = () => {
  const { id } = useParams();

  const hotel = hotels.find(h => h.id === Number(id));

  if (!hotel) {
    return <h2>Hotel not found</h2>;
  }

  return (
    <div className="hotel-details">
      
      {/* Images */}
      <div className="images">
        {hotel.images.map((img, index) => (
          <img key={index} src={img} alt={hotel.name} />
        ))}
      </div>

      {/* Main Info */}
      <h1>{hotel.name}</h1>
      <p>{hotel.city}</p>

      <p>⭐ {hotel.rating} ({hotel.reviews} reviews)</p>
      <h2>₹{hotel.price} / night</h2>

      <p>{hotel.description}</p>

      {/* Amenities */}
      <h3>Amenities</h3>
      <ul>
        {hotel.amenities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Book Button */}
      <button className="book-btn">Book Now</button>

    </div>
  );
};

export default HotelDetails;
