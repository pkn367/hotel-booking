const hotels = [
  { id: 1, name: "Taj Hotel", city: "Mumbai", price: 5000, rating: 4.8 },
  { id: 2, name: "Leela Palace", city: "Bangalore", price: 4500, rating: 4.6 },
];

export default function Hotels() {
  return (
    <div>
      <h2>Search Hotels</h2>
      {hotels.map(hotel => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>{hotel.city}</p>
          <p>₹{hotel.price}/night</p>
          <p>⭐ {hotel.rating}</p>
        </div>
      ))}
    </div>
  );
}
