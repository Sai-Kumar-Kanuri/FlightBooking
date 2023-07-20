import React, { useState } from 'react';
import FlightCard from '../../components/FlightCard/FlightCard';

const AirportApp = () => {
  const [sourceCity, setSourceCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [flights, setFlights] = useState([]);

  const handleSourceCityChange = (event) => {
    setSourceCity(event.target.value);
  };

  const handleDestinationCityChange = (event) => {
    setDestinationCity(event.target.value);
  };

  const handleTravelDateChange = (event) => {
    setTravelDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      sourceCity: sourceCity,
      destinationCity: destinationCity,
      travelDate: travelDate,
    };

    // Send the form data to the backend using a fetch or axios call
    fetch('YOUR_BACKEND_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        setFlights(data.flights);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h2>Airport Application</h2>
      <form onSubmit={handleSubmit} className="form-section">
        <div>
          <label htmlFor="sourceCity">Source City:</label>
          <input
            type="text"
            id="sourceCity"
            value={sourceCity}
            onChange={handleSourceCityChange}
          />
        </div>
        <div>
          <label htmlFor="destinationCity">Destination City:</label>
          <input
            type="text"
            id="destinationCity"
            value={destinationCity}
            onChange={handleDestinationCityChange}
          />
        </div>
        <div>
          <label htmlFor="travelDate">Travel Date:</label>
          <input
            type="date"
            id="travelDate"
            value={travelDate}
            onChange={handleTravelDateChange}
          />
        </div>
        <button type="submit">Search Flights</button>
      </form>

      <div className="section">
        <h2>Available Flights</h2>
        {flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default AirportApp;
