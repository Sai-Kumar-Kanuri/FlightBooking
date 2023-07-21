import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';

import Dashboard from './Pages/Dashboard/Dashboard';
import './App.css';
import UserSignUp from './Pages/SignUp/UserSignUp';
import DefaultPage from './Pages/DefaultPage/DefaultPage';
import UserBooking from './Pages/UserBooking/UserBooking';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import AdminHome from './Pages/AdminHome/AdminHome'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<DefaultPage/>}/>
          <Route exact path="/user/login" element={<Login/>} />
          <Route path="/user/signup" element={<UserSignUp/>} />
         
          
          {/* <Layout> */}
          <Route path="/user/dashboard" element={<Dashboard/>} />
          
          <Route path="/user/userbooking" element={<UserBooking/>}/>
          <Route path="/admin/adminlogin" element={<AdminLogin/>}/>
          <Route path="/admin/adminhome" element={<AdminHome/>}/>
          {/* </Layout> */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
