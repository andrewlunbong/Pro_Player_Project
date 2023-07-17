import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <li className='nav-bar-link'>
        <Link to="/">Home</Link>
      </li>
      <li className='nav-bar-link'>
        <Link to="/player">Player</Link>
      </li>
      <li className='nav-bar-link'>
        <Link to="/squad">Squad</Link>
      </li>
      <li className='nav-bar-link'>
        <Link to="/calendar">Calendar</Link>
      </li>
    </ul>
  );
};
export default NavBar;
