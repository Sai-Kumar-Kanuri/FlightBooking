import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import UserSignUp from './components/SignUp/UserSignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/user/login" element={<Login/>} />
          <Route path="/users/booking" element={<Home/>} />
          <Route path="/users/dashboard" element={<Dashboard/>} />
          <Route path="/user/signup" element={<UserSignUp/>} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
