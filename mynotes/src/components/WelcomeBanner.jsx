import React from 'react';
import '../styles/WelcomeBanner.css'; // Import external CSS file

function WelcomeBanner() {
  const welcomeText = "Welcome to Notefy";

  return (
    <div className="welcome-banner">
      <div className="content">
        <h1>{welcomeText}</h1>
        <p>Empower your productivity with Notefy – Your ultimate note-taking companion.</p>
        <a href="#feartres"><button>Learn More</button></a>
      </div>
    </div>
  );
}

export default WelcomeBanner;
