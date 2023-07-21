import React from 'react';
import { Link } from 'react-router-dom';
import "./DefaultPage.css"

const DefaultPage = () => {
    return (
        <div>
            <h1>Welcome to our Flight Booking Portal!</h1>
            <h2>Please select your user type to proceed:</h2>

            <div className="card-container">
                <div className="card">
                    <h3>Admin Login</h3>
                    <p>If you are an administrator or a staff member managing the flight bookings.</p>
                    <Link to="/admin/adminlogin">Go to Admin Login</Link>
                </div>

                <div className="card">
                    <h3>User Login</h3>
                    <p>If you are a regular user looking to book flights.</p>
                    <Link to="/user/login">Go to User Login</Link>
                </div>

                <div className="card">
                    <h3>New User Registration</h3>
                    <p>Please register to access flight booking services.</p>
                    <Link to="/user/signup">Register as New User</Link>
                </div>
            </div>
        </div>
    );
};

export default DefaultPage;