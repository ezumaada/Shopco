import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false); // New state for animation

  // Function to hide the banner with a sliding animation
  const handleClose = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Duration of the slide-out animation (300ms)
  };

  return (
    isVisible && (
      <div
        className={`fixed top-0 left-0 w-full  bg-black text-white p-3 flex items-center justify-center transition-transform transform ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{ transitionDuration: '300ms' }} // Set the duration for the animation
      >
        <div className="flex-grow text-center">
          <span>Sign up and get 20% off. </span> 
          <Link to="/signup" className="underline text-yellow-400">
            Sign up here.
          </Link>
        </div>
        <button onClick={handleClose} className="text-white ml-4">
          &times;
        </button>
      </div>
    )
  );
}

export default TopBanner;
