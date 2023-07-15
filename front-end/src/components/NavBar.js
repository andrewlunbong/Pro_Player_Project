import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useState } from 'react';

const NavBar = () => {
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 width-xl">
      <li className='size'>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/player">Player</Link>
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
