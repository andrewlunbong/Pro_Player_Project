import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'daisyui/dist/full.css';



const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
      </div>
      <div className="flex-2">
        <Link to="/player" className="btn btn-ghost normal-case text-xl">Player</Link>
      </div>
      <div className="flex-3">
        <Link to="/squad" className="btn btn-ghost normal-case text-xl">Squad</Link>
      </div>
      <div className="flex-4">
        <Link to="/calendar" className="btn btn-ghost normal-case text-xl">Calendar</Link>
      </div>
</div>
  );
};
export default NavBar;
