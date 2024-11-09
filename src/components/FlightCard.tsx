// FlightCard.tsx
import React from 'react';

interface FlightCardProps {
  flight: {
    airline: string;
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    price: string;
  };
  onBook: () => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onBook }) => {
  return (
    <div className="flight-card">
      <h3>{flight.airline}</h3>
      <p>{flight.from} - {flight.to}</p>
      <p>Departure: {flight.departureTime}</p>
      <p>Arrival: {flight.arrivalTime}</p>
      <p>Price: {flight.price}</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
};

export default FlightCard;
