import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CalendarPage from './components/CalendarPage';
<<<<<<< HEAD
import SquadPage from './components/SquadPage';
import Decision from './logic/Decision';
import  Timer from './components/Timer' ;
import './App.css';
import PlayerSeasonStats from './components/PlayerSeasonStats.js';
import { getProplayerPlayers, updateProplayer, postProplayer } from './services/ProplayerService';
import 'daisyui/dist/full.css';
import LeagueTable from './components/LeagueTable';
import LeagueTableCard from './components/LeagueTableCard';

=======
>>>>>>> main

import SquadPage from './components/squad/SquadPage';
import Timer from './components/Timer' ;
import './App.css';

import PlayerSeasonStats from './components/PlayerSeasonStats.js';
import ProplayerService from './services/ProplayerService';
import 'daisyui/dist/full.css';
import LeaguesPage from './pages/LeaguesPage';
import TeamPage from './pages/TeamPage'
import Match from './components/match/Match';

import Decision from './logic/Decision';


import DisplayDecisions from './components/match/DiaplayDecisions';
import PlayerPage from './pages/PlayerPage';
function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/teams')
      .then(response => response.json())
      .then(data => {
        setTeams(data);
        
      })
  }, []);

  console.log(teams)
  return (

  //   <div>
  //     <h1>List of Players</h1>
  //     <ul>
  //       {players.map(player => (
  //         <li key={player.id}>{player.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
<<<<<<< HEAD
        <Route path="/squad" element={<SquadPage />} />
        <Route path="/player" element={<PlayerSeasonStats/>} />
        <Route path="/league-table" element={<LeagueTable/>} />
        <Route path="/league-table" element={<LeagueTableCard/>} />
        {/* <Route path='/decision' element = {<Decision/>}/>
        <Route path='/timer' element= {<Timer/>}/> */}
        
        
=======
        <Route path="/squad" element={<SquadPage squad={teams[1]} />} />
        <Route path="/playerSeasonStats" element={<PlayerSeasonStats />} />
        <Route path='/timer' element= {<Timer/>}/>
        {/* Angel below */}
        <Route path='/leagues' element= {<LeaguesPage/>}/>
        <Route path='/teams/:teamId' element= {<TeamPage/>}/>
        <Route path='/players/:playerId' element= {<PlayerPage />}/>
        <Route path="/player" element={<PlayerSeasonStats />} />
        <Route path='/decision' element = {<DisplayDecisions/>}/>
        <Route path="/match" element = {<Match/>}/>
>>>>>>> main
      </Routes>
    </Router>
  );
  
}


export default App;