import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/player">Players</Link>
      </li>
      <li>
        <Link to="/squad">Squad</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
    </ul>
  );
};

export default NavBar;
