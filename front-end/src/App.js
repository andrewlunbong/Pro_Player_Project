import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from 'react-calendar'; 
import './App.css';
import HomePage from './containers/HomePage';


function App() {
//  const [date, setDate] = useState(new Date())




  return (
    <Router>
      <Routes>
        <Route path='/decision' element = {<Decision/>}/>

        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}


export default App;