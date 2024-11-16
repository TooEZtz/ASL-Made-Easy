import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
   
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleGetStartedClick = () => {
    if (isAuthenticated) {
      
      navigate("/GetStarted");
    } else {
     
      navigate("/auth/google");
    }
  };

  return (
    <header className='w-full bg-white/1 ring-white ring-[0.1px] backdrop-blur-sm absolute py-1 flex justify-around items-center pl-10 z-10 rounded-md w-max-10'>
      <img
        src="src/assets/help.png" 
        alt="sign-language"
        width={80} 
        className='hover:-translate-y-2'
      />

      <nav className='text-xl flex-1  flex justify-center'>
        <ul className='font-main text-white  flex justify-evenly xl:gap-60 sm:gap-10 md:gap-40 items-center'>
          <li className='px-4 py-2 rounded-md hover:border-b-4 hover:border-neutral-300'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-4 py-2 rounded-md hover:border-b-4 hover:border-neutral-300'>
            <Link to="/about">About</Link>
          </li> 
          <li className='px-4 py-2 rounded-md hover:border-b-4 hover:border-neutral-300'>
            {/* Handle Get Started button click */}
            <button onClick={handleGetStartedClick}>
              Get Started
            </button>
          </li> 
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
