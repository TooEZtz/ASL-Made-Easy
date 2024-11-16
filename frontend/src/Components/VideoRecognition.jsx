import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

function VideoRecognition() {
  const videoRef = useRef(null);
  const [text, setText] = useState('');

  const sendFrameToServer = async (frame) => {
    try {
      const response = await axios.post('http://localhost:5000/recognize-sign-language', {
        videoFrame: frame,
      });
      setText(response.data.text);
    } catch (error) {
      console.error(error);
    }
  };

  const captureFrame = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0);
    const frame = canvas.toDataURL('image/png');
    sendFrameToServer(frame);
  };

  useEffect(() => {
    const interval = setInterval(captureFrame, 1000); // Capture a frame every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline></video>
      <p>{text}</p>
    </div>
  );
}

export default VideoRecognition;
