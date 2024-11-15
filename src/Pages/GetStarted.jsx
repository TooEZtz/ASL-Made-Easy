import React from 'react';
import GoogleAuth from '../Components/GoogleAuth';



const GetStarted = () => {
  return (
    <div className="get-started">
      <h2>Welcome to Get Started Page</h2>
      <GoogleAuth />  {/* Trigger Google login on Get Started page */}
    </div>
  );
};

export default GetStarted;
