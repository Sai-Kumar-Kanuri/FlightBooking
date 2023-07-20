// Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., send data to the server, validate credentials)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    // Implement the logic to navigate to the sign-up page here
    // For example, you can use React Router to handle navigation
    console.log('Navigate to Sign Up page');
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
