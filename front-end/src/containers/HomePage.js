import React from 'react';
import { Link } from 'react-router-dom';
import LeagueTable from '../components/LeagueTable';
import NavBar from '../components/NavBar';
import LeagueTableCard from '../components/LeagueTableCard';


const HomePage = ({LeagueTable}) => {
  return (
    <div className="home-container h-screen">
     <NavBar/>
     <LeagueTableCard LeagueTable={LeagueTable}/>
    </div>
  );
};

export default HomePage;






