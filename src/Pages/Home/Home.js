// Home.js
import React, { useState } from 'react';
import './Home.css'; // Import the Home.css file for styles

const Home = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic here, e.g., send form data to the server
    console.log('Departure City:', departureCity);
    console.log('Arrival City:', arrivalCity);
    console.log('Departure Date:', departureDate);
    console.log('Passengers:', passengers);
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to Flight Booking</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group input-group">
          <label htmlFor="departureCity">Departure:</label>
          <input
            type="text"
            id="departureCity"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group input-group">
          <label htmlFor="arrivalCity">Destination:</label>
          <input
            type="text"
            id="arrivalCity"
            value={arrivalCity}
            onChange={(e) => setArrivalCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            value={passengers}
            min="1"
            max="10"
            onChange={(e) => setPassengers(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="book-flight-button">
          Book Flight
        </button>
      </form>
    </div>
  );
};

export default Home;
