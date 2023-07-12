import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CalendarPage from './components/CalendarPage';
import SquadPage from './components/SquadPage';
import './App.css';
import PlayerSeasonStats from './components/PlayerSeasonStats.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/squad" element={<SquadPage />} />
        <Route path="/player" element={<PlayerSeasonStats />} />
        <Route path='/decision' element = {<Decision/>}/>
      </Routes>
    </Router>
  );
}


export default App;