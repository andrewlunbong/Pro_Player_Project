import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage';
import Timer from './components/Timer';
import Decision from './logic/Decision';


function App() {
//  const [date, setDate] = useState(new Date())




  return (
    <Router>
      <Routes>
        <Route path='/decision' element = {<Decision/>}/>
        <Route path='/timer' element= {<Timer/>}/>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}


export default App;