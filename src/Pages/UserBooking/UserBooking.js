import React, { useState } from 'react';
import FlightCard from '../../components/FlightCard/FlightCard';
import "./UserBooking.css";
import axios from 'axios';
import Navbar from '../../components/FlightCard/Navbar/Navbar';
// import { useNavigate } from 'react-router-dom';

const AirportApp = () => {
  const [sourceCity, setSourceCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [flights, setFlights] = useState([]);

  // let navigate = useNavigate();

  // console.log(props);

  const handleSourceCityChange = (event) => {
    setSourceCity(event.target.value);
  };

  const handleDestinationCityChange = (event) => {
    setDestinationCity(event.target.value);
  };

  const handleTravelDateChange = (event) => {
    setTravelDate(event.target.value);
    
    // setTravelDate(formattedDate);
    // console.log(travelDate);
  };

  // const token = localStorage.getItem('authorization');
  // console.log("token:",token);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the backend using Axios
      const token = JSON.parse(localStorage.getItem('authorization'));
      console.log(token);
      const dateComponents = travelDate.split('-');
      const formattedDate = `${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`;
      const formData = {
        flightOrigin: sourceCity,
        flightDestination: destinationCity,
        startDate: formattedDate,
      };
      const response = await axios.post('https://devrev-assessment.onrender.com/api/flight/getflightsByDate', formData, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.result);
      // Handle the response from the backend
      setFlights(response.data.result);

      // console.log(flights);
      // navigate('/users/userbooking');

      
    } catch (error) {
      // Handle errors that occurred during the POST request
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar/>
    
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
    </div>
  );
};

export default AirportApp;
