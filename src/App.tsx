import React, { useState } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch';
import FlightList from './components/FlightList';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [showFlights, setShowFlights] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<any | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const dummyFlights = [
    { airline: "Air India", from: "DEL", to: "BOM", departureTime: "10:00 AM", arrivalTime: "1:00 PM", price: "₹5,000" },
    { airline: "IndiGo", from: "DEL", to: "BOM", departureTime: "3:00 PM", arrivalTime: "6:00 PM", price: "₹4,800" },
    { airline: "Emirates", from: "DEL", to: "DXB", departureTime: "12:00 PM", arrivalTime: "4:00 PM", price: "₹15,000" },
    { airline: "Qatar Airways", from: "DEL", to: "DOH", departureTime: "1:00 AM", arrivalTime: "5:00 AM", price: "₹18,000" },
    { airline: "British Airways", from: "DEL", to: "LHR", departureTime: "2:00 AM", arrivalTime: "7:00 AM", price: "₹25,000" },
  ];

  const handleSearchFlights = () => {
    setShowFlights(true);
  };

  const handleBookFlight = (flight: any) => {
    setSelectedFlight(flight);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = () => {
    alert("Booking Successful!");
    setShowBookingModal(false);
    setSelectedFlight(null);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Book International and Domestic Flights</h1>
      
      <FlightSearch onSearch={handleSearchFlights} />

      {showFlights && (
        <FlightList flights={dummyFlights} onBook={handleBookFlight} />
      )}

      {showBookingModal && selectedFlight && (
        <BookingModal 
          flight={selectedFlight} 
          onSubmit={handleBookingSubmit} 
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
};

export default App;
