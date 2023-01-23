import React from 'react';
import { Link } from 'react-router-dom'; // for client-side routing
import './App.css';
const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/muscle-group-growth">Muscle Group Growth</Link></li>
          <li><Link to="/workout-mode">Workout Mode</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
    );
  }
  
  
export default Navbar;
