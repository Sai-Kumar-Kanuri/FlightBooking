// Layout.js
import React from 'react';
import Navbar from './FlightCard/Navbar/Navbar'; // Import the Navbar component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
