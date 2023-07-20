// Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login data to the backend
      const response = await axios.post('https://devrev-assessment.onrender.com/api/user/login', {
        email,
        password,
      });

      console.log(response.data.token);

      if(response.data.token){
        navigate('/user/userbooking');
      }
      localStorage.setItem("authorization", JSON.stringify(response.data.token));

      // ... (remaining code)
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.response.data);
    }
  };

  const handleSignUp = async () => {
    console.log('Navigate to Sign Up page');
    navigate("/user/signup");
  };


  return (
    <div className="login-container">
      <h2 className="login-title">Login to Flight Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <p className="signup-link">
        Don't have an account?{' '}
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
