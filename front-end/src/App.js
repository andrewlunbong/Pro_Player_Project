
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Decision from './logic/Decision';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Decision/>}/>
      </Routes>
    </Router>

    
  );
}

export default App;
