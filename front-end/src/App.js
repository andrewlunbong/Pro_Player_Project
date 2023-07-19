import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CalendarPage from './components/CalendarPage';
// import { useHistory } from 'react-router-dom';

// import Decision from './logic/Decision';
import PlayerSeasonStats from './components/PlayerSeasonStats.js';
import { getProplayerPlayers, updateProplayer, postProplayer } from './services/ProplayerService';
import 'daisyui/dist/full.css';
import LeagueTable from './components/leaguetable/LeagueTable';
import LeagueTableCard from './components/LeagueTableCard';


import SquadPage from './components/squad/SquadPage';
// import Timer from './components/Timer' ;
import './App.css';
import ProplayerService from './services/ProplayerService';
import LeaguesPage from './pages/LeaguesPage';
import TeamPage from './pages/TeamPage'
import Match from './components/match/Match';

import Decision from './logic/Decision';


import DisplayDecisions from './components/match/DiaplayDecisions';

import SubmitForm from './components/SubmitForm';


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

  const [players, setPlayers] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080/players')
    .then(response => response.json())
    .then(data => {
      setPlayers(data);
    });
}, []);
const [leagues,setLeagues] = useState();

useEffect(() => {
  fetch('http://localhost:8080/leagues')
    .then(response => response.json())
    .then(data => {
      setLeagues(data);
    });
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
      <Route path="/" element={<SubmitForm teams={teams}  />} />
        <Route path="/home" element={<HomePage  />} />
        <Route path="/calendar" element={<CalendarPage />} />

        <Route path="/squad" element={<SquadPage squad={teams[1]} />} />
        <Route path="/playerSeasonStats" element={<PlayerSeasonStats />} />
        {/* <Route path='/timer' element= {<Timer/>}/> */}
        {/* Angel below */}
        <Route path='/leagues' element= {<LeaguesPage/>}/>
        <Route path="/league-table" element= {<LeagueTable league = {leagues}/>}/>
        <Route path='/teams/:teamId' element= {<TeamPage/>}/>
        <Route path='/players/:playerId' element= {<PlayerPage />}/>
        <Route path="/player" element={<PlayerSeasonStats />} />
        <Route path='/decision' element = {<DisplayDecisions/>}/>
        <Route path="/match" element = {<Match/>}/>
        {/* <Route path="/submit-form" element ={<SubmitForm teams={teams} players={players} />}/> */}
        <Route path="/teams" element= {<TeamPage/>}/>
      </Routes>
    </Router>
  );
  
}


export default App;