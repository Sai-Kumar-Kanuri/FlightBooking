import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [bookedFlights, setBookedFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem("userId"));
        const token = JSON.parse(localStorage.getItem("authorization"))
        // ...

        const response = await axios.get(
          `https://devrev-assessment.onrender.com/api/book/getbookings/${userId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = response.data.bookings;

        // console.log(data);
        setBookedFlights(data);
      } catch (error) {
        // Handle errors
        console.error('Error:', error.message); // Log the specific error message
      }
    };


    fetchData(); // Call the function to fetch the data
  }, []);

  // console.log(bookedFlights);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">My Booked Flights</h2>
      <div className="booking-cards-container">
       {bookedFlights.map((booking)=>{return(<BookingCard booking={booking} />)})}
      </div>
    </div>
  );
};

export default Dashboard;
