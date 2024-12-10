import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Hop-In!</h1>
        <p>Your seamless carpooling journey starts here.</p>
      </header>

      <div className="landing-options">
        <button
          className="landing-button"
          onClick={() => navigate('/create-ride')}
        >
          Create Ride
        </button>
        <button
          className="landing-button"
          onClick={() => navigate('/join-ride')}
        >
          Join Ride
        </button>
        <button
          className="landing-button"
          onClick={() => navigate('/ride-history')}
        >
          Ride History
        </button>
      </div>

      <footer className="landing-footer">
        <p>&copy; 2024 Hop-In. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
