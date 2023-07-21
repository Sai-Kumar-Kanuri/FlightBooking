// UserSignUp.js
import React, { useState } from 'react';
import './UserSignUp.css'; // Import the UserSignUp.css file for styles
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
// import Loading from '../../Loading/Loading';



const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform user sign-up logic here
  //   console.log('User Sign Up:', email, password, fullName, confirmPassword);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login data to the backend
      setLoading(true);
      const response = await axios.post('https://devrev-assessment.onrender.com/api/user/signUp', {
        name: fullName,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,

      });

      // console.log(response.data.token);
      setLoading(false);
      console.log(response)
      if (response.status === 201) {
        // If signup is successful, navigate to the login page
        navigate('/user/login');
      }

      // ... (remaining code)
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className="user-signup-container">
      {loading && <Loading/>}
      <h2 className="user-signup-title">User Sign Up</h2>
      <form onSubmit={handleSubmit} className="user-signup-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Confirm Password:</label>
          <input
            type="password"
            id="phoneNumber"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserSignUp;
