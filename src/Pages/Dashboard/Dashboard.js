// Dashboard.js
import React, { useState } from 'react';
import BookingCard from './BookingCard';
import './Dashboard.css'; // Import the Dashboard.css file for styles

const Dashboard = () => {
  // Dummy data for booked flights
  const [bookedFlights, setBookedFlights] = useState([
    {
      id: 1,
      departureCity: 'New York',
      arrivalCity: 'Los Angeles',
      departureDate: '2023-07-28',
      passengers: 2,
    },
    {
      id: 2,
      departureCity: 'San Francisco',
      arrivalCity: 'Chicago',
      departureDate: '2023-08-10',
      passengers: 1,
    },
    // Add more booked flights here...
  ]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">My Booked Flights</h2>
      <div className="booking-cards-container">
        {bookedFlights.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
      <p className="dashboard-footer">© 2023 Flight Booking App. All rights reserved.</p>
    </div>
  );
};

export default Dashboard;
