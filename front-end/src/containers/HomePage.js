import React from 'react';
import { Link } from 'react-router-dom';
import LeagueTable from '../components/leaguetable/LeagueTable';
import NavBar from '../components/NavBar';
import HomePageCard from '../components/HomePageCard';
import EmailPage from '../components/EmailPage';
import PlayerDevelopment from '../components/PlayerDevelopment';


const HomePage = ({ourPlayer}) => {
  return (
    <div className="home-container h-screen">
     <HomePageCard/>
     {/* <EmailPage/>
     <PlayerDevelopment/> */}
     <LeagueTableCard ourPlayer={ourPlayer}/>
    </div>
  );
};

export default HomePage;






