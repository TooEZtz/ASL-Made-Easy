import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import SpeechToASL from './Pages/SpeechToASL';
import GetStarted from './Pages/GetStarted';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./Pages/SpeechToASL" element={<SpeechToASL />} />
        <Route path="./Pages/GetStarted" element={<GetStarted />} />

      </Routes>
    </Router>
  );
}

export default App;
