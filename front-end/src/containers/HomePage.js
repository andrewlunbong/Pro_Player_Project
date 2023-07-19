import React from 'react';
import { Link } from 'react-router-dom';
import LeagueTable from '../components/leaguetable/LeagueTable';
import NavBar from '../components/NavBar';
import LeagueTableCard from '../components/LeagueTableCard';
import EmailPage from '../components/EmailPage';
import PlayerDevelopment from '../components/PlayerDevelopment';


const HomePage = ({league}) => {
  return (
    <div className="home-container h-screen">
     <NavBar/>
     <LeagueTableCard league={league}/>
    </div>
  );
};

export default HomePage;






