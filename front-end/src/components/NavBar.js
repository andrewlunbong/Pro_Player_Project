import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { Menu } from 'antd';



const NavBar = () => {
  return (
   
    <div className="navbar bg-base-100">
      <Link to="/" className="btn btn-ghost normal-case text-xl w-1/6">Home</Link>
      <Link to="/player" className="btn btn-ghost normal-case text-xl w-1/6">Player</Link>
      <Link to="/squad"className="btn btn-ghost normal-case text-xl w-1/6">Squad</Link>
      <Link to="/calendar" className="btn btn-ghost normal-case text-xl w-1/6">Calendar</Link>
      <Link to="/leagues" className="btn btn-ghost normal-case text-xl w-1/6">League</Link>
      <p className="btn btn-ghost normal-case text-xl w-1/6">Exp</p>
    </div>
  );
};
export default NavBar;
