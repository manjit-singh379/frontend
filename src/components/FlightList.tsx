import React from 'react';

interface Flight {
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
}

interface FlightListProps {
  flights: Flight[];
  onBook: (flight: Flight) => void;
}

const FlightList: React.FC<FlightListProps> = ({ flights, onBook }) => (
  <div className="bg-white p-4 rounded-lg shadow-md max-w-4xl mx-auto mt-4">
    {flights.map((flight, index) => (
      <div key={index} className="flex justify-between items-center p-4 border-b">
        <div>
          <p className="font-semibold">{flight.airline}</p>
          <p>{flight.from} to {flight.to}</p>
          <p>Departure: {flight.departureTime}</p>
          <p>Arrival: {flight.arrivalTime}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-bold text-lg">{flight.price}</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded mt-2" onClick={() => onBook(flight)}>
            Book
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default FlightList;
