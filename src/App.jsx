import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import SpeechToASL from './Pages/SpeechToASL';
import GetStarted from './Pages/GetStarted';
import Home from './Pages/Home';
import GoogleAuth from './Components/GoogleAuth';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SpeechToASL" element={<SpeechToASL />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/auth/google" element={<GoogleAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
