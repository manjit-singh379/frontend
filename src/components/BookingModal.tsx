import React, { useState } from 'react';

interface BookingModalProps {
  flight: any;
  onSubmit: () => void;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ flight, onSubmit, onClose }) => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    age: '',
    phone: '',
    paymentType: 'Credit Card',
  });

  const handleSubmitPayment = () => {
    if (!personalDetails.name || !personalDetails.age || !personalDetails.phone) {
      alert("Please complete all personal details.");
      return;
    }
    alert("Booking Confirmed! Payment Success.");
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Confirm Booking</h2>
        <p>{flight.airline} from {flight.from} to {flight.to}</p>
        <p>Departure: {flight.departureTime}</p>
        <p>Arrival: {flight.arrivalTime}</p>
        <p className="font-bold text-lg">Price: {flight.price}</p>

        <div className="mt-4">
          <label className="text-sm font-semibold">Name</label>
          <input type="text" className="border p-2 rounded w-full mb-2" value={personalDetails.name} onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })} />

          <label className="text-sm font-semibold">Age</label>
          <input type="number" className="border p-2 rounded w-full mb-2" value={personalDetails.age} onChange={(e) => setPersonalDetails({ ...personalDetails, age: e.target.value })} />

          <label className="text-sm font-semibold">Phone</label>
          <input type="text" className="border p-2 rounded w-full mb-2" value={personalDetails.phone} onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })} />

          <label className="text-sm font-semibold">Payment Type</label>
          <select className="border p-2 rounded w-full mb-2" value={personalDetails.paymentType} onChange={(e) => setPersonalDetails({ ...personalDetails, paymentType: e.target.value })}>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button className="text-gray-500" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmitPayment}>Confirm and Pay</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
