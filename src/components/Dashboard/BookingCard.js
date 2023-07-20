// BookingCard.js
import React from 'react';
import './BookingCard.css'; // Import the BookingCard.css file for styles

const BookingCard = ({ booking }) => {
  const { id, departureCity, arrivalCity, departureDate, passengers } = booking;

  return (
    <div className="booking-card">
      <h3>Booking ID: {id}</h3>
      <p>Departure: {departureCity}</p>
      <p>Destination: {arrivalCity}</p>
      <p>Departure Date: {departureDate}</p>
      <p>Passengers: {passengers}</p>
    </div>
  );
};

export default BookingCard;
