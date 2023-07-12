<<<<<<< HEAD

import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Decision from './logic/Decision';
=======
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from 'react-calendar'; 
import './App.css';
import HomePage from './containers/HomePage';

>>>>>>> main

function App() {
//  const [date, setDate] = useState(new Date())




  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element = {<Decision/>}/>
      </Routes>
    </Router>

    
=======
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
>>>>>>> main
  );
}


export default App;