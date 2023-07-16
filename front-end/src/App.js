import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CalendarPage from './components/CalendarPage';
import SquadPage from './components/SquadPage';
import Decision from './logic/Decision';
import  Timer from './components/Timer' ;
// import './App.css';
import PlayerSeasonStats from './components/PlayerSeasonStats.js';
import Match from './components/match/Match';
import Decision from './logic/Decision';
import Timer from './components/Timer';
import DisplayDecisions from './components/match/DiaplayDecisions';
function App() {

  // const [players, setPlayers] = useState([]);

  // useEffect(() => {
    

  //   fetch('http://localhost:8080/players')
  //     .then(response => response.json())
  //     .then(data => {
  //       setPlayers(data);
        
  //     })
  // }, []);

  
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
        <Route path="/squad" element={<SquadPage />} />
        <Route path="/player" element={<PlayerSeasonStats />} />
        <Route path='/decision' element = {<DisplayDecisions/>}/>
        <Route path='/timer' element= {<Timer/>}/>
        <Route path="/match" element = {<Match/>}/>
        
      </Routes>
    </Router>
  );
  
}


export default App;