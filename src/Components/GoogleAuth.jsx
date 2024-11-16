import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const GoogleAuth = () => {
  const [error, setError] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const response = await window.gapi.auth2.getAuthInstance().signIn();
      const authCode = response.getAuthResponse().code;

      await fetch('/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: authCode })
      });
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <main className="absolute w-full h-[100%] flex">
      <Spline scene="https://prod.spline.design/Rd2CkSaOHT7nP7fO/scene.splinecode" />
      <div className='absolute z-10 w-full bottom-20 flex justify-evenly items-center'>
        <button onClick={handleGoogleLogin} className="rounded-md px-7 py-4 hover:ring-4 hover:ring-[#25A04C] w-[60%] bg-google bg-center bg-origin-content hover:bg-google2">
          <h1 className='font-main font-extrabold text-3xl text-[#E94135] hover:text-[#25A04C]' >
          Sign in with Google
          </h1>
        </button>
        {error && <p>{error}</p>}
      </div>
    </main>
  );
};

export default GoogleAuth;
