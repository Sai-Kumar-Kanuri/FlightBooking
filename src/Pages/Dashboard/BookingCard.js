// BookingCard.js
import React from 'react';
import './BookingCard.css'; // Import the BookingCard.css file for styles

const BookingCard = (props) => {

  console.log("props:",props);
  // const { id, departureCity, arrivalCity, departureDate, passengers } = booking;

  return (
    <div className="booking-card">
      <h3>Booking ID: {props.booking._id}</h3>
      <p>Departure: {props.booking.flightOrigin}</p>
      <p>Destination: {props.booking.flightDestination}</p>
      <p>Departure Date: {props.booking.flightStartDate}</p>
      {/* <p>Passengers: {60-}</p> */}
    </div>

  );
};

export default BookingCard;
