
import React, { useState } from 'react';

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
    <div>
      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default GoogleAuth;
