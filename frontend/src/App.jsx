import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SpeechToASL from './Pages/SpeechToASL';

import SignLanguageRecognition from './Pages/SignLanguageRecognition';
import Home from './Pages/Home';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';

function App() {
  const { isSignedIn } = useAuth();

  return (
    <Router>
      {isSignedIn && <NavBar />} {/* Show NavBar only if signed in */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        
        {/* Protected Routes */}
        {isSignedIn && (
          <>
            <Route path="/speech-to-asl" element={<SpeechToASL />} />
            <Route path="/sign-language-recognition" element={<SignLanguageRecognition />} />
            
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
