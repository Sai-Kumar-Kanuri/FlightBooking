import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import './App.css';
import UserSignUp from './Pages/SignUp/UserSignUp';
import DefaultPage from './Pages/DefaultPage/DefaultPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<DefaultPage />} />
          <Route exact path="/user/login" element={<Login />} />
          <Route path="/user/booking" element={<Home />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/signup" element={<UserSignUp />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
