import React from 'react';
import axios from 'axios';

const FlightCard = ({ flight, onDelete }) => {
  const handleDeleteFlight = () => {
    // Call the onDelete function to delete the flight
    onDelete();
  };

  return (
    <div className="flight-card">
      <p>Flight Number: {flight._id}</p>
      <p>Flight Name: {flight.flightName}</p>
      <p>Source: {flight.flightOrigin}</p>
      <p>Destination: {flight.flightDestination}</p>
      <p>Departure Date: {flight.flightStartDate}</p>
      <p>Depature Time: {flight.flightStartTime}</p>
      <p>Arrival Date: {flight.flightEndDate}</p>
      <p>Arrival Time: {flight.flightEndTime}</p>
      <p>No. of Seats: {flight.noofseats}</p>
      <p>Fare: {flight.flightFare}</p>
      <div className="buttons">
        <button onClick={handleDeleteFlight}>Delete</button>
      </div>
    </div>
  );
};

export default FlightCard;
