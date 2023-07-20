import React from 'react';
import './FlightCard.css';

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div className="flight-info">
        <p>Flight Number: {flight._id}</p>
        <p>Source: {flight.flightOrigin}</p>
        <p>Destination: {flight.flightDestination}</p>
        <p>Departure Date: {flight.flightStartDate}</p>
        <p>Depature Time: {flight.flightStartTime}</p>
        <p>Arrival Date: {flight.flightEndDate}</p>
        <p>Arrival Time: {flight.flightEndTime}</p>
        <p>No. of Seats: {flight.noofseats}</p>
        <p>Fare: {flight.flightFare}</p>
      </div>
      <button className="book-button">Book</button>
    </div>
  );
};

export default FlightCard;



