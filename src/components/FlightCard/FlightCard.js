import React from 'react';
import './FlightCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const FlightCard = ({ flight }) => {

  

  let navigate = useNavigate();
  const handleBookFlight = async () => {

    try {
      // Data to be sent in the POST request

      const userId = JSON.parse(localStorage.getItem("userId"));
      const token = JSON.parse(localStorage.getItem('authorization'));
      const dataToSend = {
        UserId: userId,
        FlightId: flight._id,
      };

      console.log(dataToSend);

      // POST request using Axios
      const response = await axios.post('https://devrev-assessment.onrender.com/api/book/bookflight', dataToSend, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });

      // Handle the response from the server
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors that occurred during the POST request
      console.error('Error:', error);
    }


    navigate('/user/dashboard');
  }
  return (
    <div className="flight-card">
      <div className="flight-info">
        <p className="flight-number">Flight Number: {flight._id}</p>
        <p className="flight-origin">Source: {flight.flightOrigin}</p>
        <p className="flight-destination">Destination: {flight.flightDestination}</p>
        <p className="flight-date">Departure Date: {flight.flightStartDate}</p>
        <p className="flight-time">Departure Time: {flight.flightStartTime}</p>
        <p className="flight-date">Arrival Date: {flight.flightEndDate}</p>
        <p className="flight-time">Arrival Time: {flight.flightEndTime}</p>
        <p className="flight-seats">No. of Seats: {flight.noofseats}</p>
        <p className="flight-fare">Fare: ₹{flight.flightFare}</p>
        <p className="flight-number">Flight Number: {flight._id}</p>
      </div>
      <button className="book-button" onClick={handleBookFlight}>Book  ₹{flight.flightFare}</button>
    </div>
  );
};

export default FlightCard;
