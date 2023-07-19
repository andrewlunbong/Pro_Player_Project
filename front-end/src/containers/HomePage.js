import React from 'react';
import { Link } from 'react-router-dom';
import LeagueTable from '../components/LeagueTable';
import NavBar from '../components/NavBar';
import LeagueTableCard from '../components/LeagueTableCard';
import EmailPage from '../components/EmailPage';
import PlayerDevelopment from '../components/PlayerDevelopment';


const HomePage = () => {
  return (
    <div className="home-container h-screen">
     <LeagueTableCard/>
     {/* <EmailPage/>
     <PlayerDevelopment/> */}
    </div>
  );
};

export default HomePage;






