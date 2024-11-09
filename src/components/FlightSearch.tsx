import React, { useState } from 'react';

interface FlightSearchProps {
  onSearch: () => void;
}

const FlightSearch: React.FC<FlightSearchProps> = ({ onSearch }) => {
  const [tripType, setTripType] = useState('One Way');
  const [fareType, setFareType] = useState('Regular');
  const [travelerCount, setTravelerCount] = useState(1);
  const [travelerClass, setTravelerClass] = useState('Economy');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <div className="flex justify-around mb-4">
        {['One Way', 'Round Trip', 'Multi City'].map((type) => (
          <label key={type} className="flex items-center space-x-2">
            <input
              type="radio"
              name="tripType"
              value={type}
              checked={tripType === type}
              onChange={() => setTripType(type)}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold">From</label>
          <input type="text" placeholder="Delhi" className="border p-2 rounded" />
          <span className="text-xs text-gray-500">DEL, Delhi Airport India</span>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">To</label>
          <input type="text" placeholder="Mumbai" className="border p-2 rounded" />
          <span className="text-xs text-gray-500">BOM, Chhatrapati Shivaji International</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Departure</label>
          <input type="date" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Return</label>
          <input type="date" className="border p-2 rounded" disabled={tripType === 'One Way'} />
          {tripType === 'One Way' && (
            <span className="text-xs text-gray-500">Tap to add a return date for bigger discounts</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Travellers & Class</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              value={travelerCount}
              onChange={(e) => setTravelerCount(Number(e.target.value))}
              className="border p-2 rounded w-16"
              placeholder="1"
            />
            <select
              value={travelerClass}
              onChange={(e) => setTravelerClass(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm font-semibold">Select a special fare</label>
        <div className="flex space-x-4 mt-2">
          {['Regular', 'Student', 'Senior Citizen', 'Armed Forces', 'Doctor and Nurses'].map((type) => (
            <button
              key={type}
              className={`py-1 px-4 rounded-full text-xs ${fareType === type ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setFareType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-10 rounded-full"
          onClick={onSearch}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;
