// Login.js
import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const AdminLogin = () => {
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

      console.log(response.data.role);

      if(response.data.token && response.data.role==='admin'){
        navigate('/admin/adminhome');
      }
      else if(response.data.token && response.data.role!=='admin'){
        alert("You are not an admin")
      }
      localStorage.setItem("authorization", JSON.stringify(response.data.token));

      // ... (remaining code)
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.response.data);
    }
  };

  const handleAdminSignIn = async () => {
    console.log('Navigate to Admin Home page');
    navigate("/admin/adminhome");
  };


  return (
    <div className="login-container">
      <h2 className="login-title">Login as Admin</h2>
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
        <button className="login-button" type="submit" onSubmit={handleAdminSignIn}>
          Login
        </button>
      </form>
      
    </div>
  );
};

export default AdminLogin;
