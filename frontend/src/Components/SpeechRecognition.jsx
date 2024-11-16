import React, { useState } from 'react';
import axios from 'axios';

function SpeechRecognition() {
  const [text, setText] = useState('');

  const handleSpeech = async (audioData) => {
    try {
      const response = await axios.post('http://localhost:5000/speech-to-text', {
        audioData,
      });
      setText(response.data.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleSpeech}>Start Recording</button>
      <p>{text}</p>
    </div>
  );
}

export default SpeechRecognition;
