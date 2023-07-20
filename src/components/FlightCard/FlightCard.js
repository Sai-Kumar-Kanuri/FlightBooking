

import React from 'react';
import './FlightCard.css'

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <p>Flight Number: {flight.flightNumber}</p>
      <p>Source: {flight.source}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Date: {flight.departureDate}</p>
    </div>
  );
};

export default FlightCard;
