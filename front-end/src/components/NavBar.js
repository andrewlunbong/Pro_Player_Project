import React from 'react';
import { Link } from 'react-router-dom';
// import { Menu } from 'antd';



const NavBar = () => {
  return (
   
    <div className="navbar bg-base-100">
      <Link to="/" className="btn btn-ghost normal-case text-xl w-80">Home</Link>
      <Link to="/player" className="btn btn-ghost normal-case text-xl w-80">Player</Link>
      <Link to="/squad"className="btn btn-ghost normal-case text-xl w-80">Squad</Link>
      <Link to="/calendar" className="btn btn-ghost normal-case text-xl w-80">Calendar</Link>
    </div>
    // <div className="navbar bg-base-100">
    //   <div className="flex-1">
    //     <Link to="/" className="btn btn-ghost normal-case text-xl w-80">Home</Link>
    //   </div>
    //   <div className="flex-2">
    //     <Link to="/player" className="btn btn-ghost normal-case text-xl w-80">Player</Link>
    //   </div>
    //   <div className="flex-3">
    //     <Link to="/squad" className="btn btn-ghost normal-case text-xl w-80">Squad</Link>
    //   </div>
    //   <div className="flex-4">
    //     <Link to="/calendar" className="btn btn-ghost normal-case text-xl w-80">Calendar</Link>
    //   </div>
    // </div>

  );
};
export default NavBar;
