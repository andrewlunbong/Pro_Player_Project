import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CalendarPage from './components/CalendarPage';
import SquadPage from './components/squad/SquadPage';

import Timer from './components/match/Timer' ;
import PlayerDetails from './components/PlayerDetails';
import './App.css';
import PlayerSeasonStats from './components/PlayerSeasonStats.js';
import ProplayerService from './services/ProplayerService';
import 'daisyui/dist/full.css';
import LeaguesPage from './pages/LeaguesPage';
import TeamPage from './pages/TeamPage'
import Match from './components/match/Match';
import Decision from './logic/Decision';
import DisplayDecisions from './components/match/DiaplayDecisions';
import GameGenerator from './logic/GmeGenerator';
function App() {

  const [teams, setTeams] = useState([]);
  let season = useRef()
  let allMatchhesAreCreated = useRef(false)
  const [matches, setMatches] = useState()

  useEffect(() => {
    
    fetch('http://localhost:8080/teams')
      .then(response => response.json())
      .then(data => {
        setTeams(data);
        
      })
      
  }, []);

  console.log(teams)

  const createSeason=()=>{
    const startingSeason = {year: 2022}
    if(!season.current){
      ProplayerService.postNewSeason(startingSeason)
      .then((postedSeason) => season.current = postedSeason)
    }
 

  }

  const generateAllGames= ()=>{
    if(season && teams.length > 40  && !allMatchhesAreCreated.current){
      let [championshipMatches, premierLeagueMatches] = GameGenerator(teams, season)
      console.log("championshipMatches[1]", championshipMatches[1])
      ProplayerService.postNewMatch(championshipMatches[1])
      // for(let match of premierLeagueMatches){
      //   ProplayerService.postNewMatch(match)
      
      // }
      // for (let match of championshipMatches){
      //   ProplayerService.postNewMatch(match)
      // }
       
      // ProplayerService.getMatches()
      //   .then((allMatches) => setMatches(allMatches))
      allMatchhesAreCreated.current = true
    }

  }
  createSeason()
  generateAllGames()
 
  console.log(season)

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
        {teams ?<Route path="/squad" element={<SquadPage squad={teams[1]}/>} /> : null }
        <Route path="/playerSeasonStats" element={<PlayerSeasonStats />} />
        <Route path='/timer' element= {<Timer/>}/>
        <Route path='/leagues' element= {<LeaguesPage/>}/>
        <Route path='/teams/:teamId' element= {<TeamPage/>}/>
        <Route path="/player" element={<PlayerSeasonStats />} />
        <Route path='/decision' element = {<DisplayDecisions/>}/>
        <Route path="/match" element = {<Match/>}/>
        
      </Routes>
    </Router>
  );
  
}


export default App;