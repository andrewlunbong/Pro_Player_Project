import React from 'react';
import { Link } from 'react-router-dom';
import LeagueTable from '../components/LeagueTable';
import NavBar from '../components/NavBar';
import HomePageCard from '../components/HomePageCard';
import EmailPage from '../components/EmailPage';
import PlayerDevelopment from '../components/PlayerDevelopment';


const HomePage = () => {
  return (
    <div className="home-container h-screen">
     <HomePageCard/>
     {/* <EmailPage/>
     <PlayerDevelopment/> */}
    </div>
  );
};

export default HomePage;






