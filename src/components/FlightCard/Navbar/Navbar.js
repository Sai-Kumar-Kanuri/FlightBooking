import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authorization'));
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('authorization');
        setIsLoggedIn(false)
        navigate('/');
    };

    const handleLogin = () => {
        // Perform login actions (e.g., authenticate user, store token in localStorage)
        // localStorage.setItem('token', 'your_auth_token_here');
        navigate('/user/login');
        setIsLoggedIn(true);
      };

    

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1 className="navbar-title">Flight Booking App</h1>
            </div>
            <div className="navbar-links">
                <Link to="/user/dashboard" className="navbar-link">
                    My Bookings
                </Link>

                { isLoggedIn && <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>}

                { !isLoggedIn && <button onClick={handleLogin} className="logout-button">
                    Log In
                </button>}

            </div>
        </nav>
    );
};

export default Navbar;
