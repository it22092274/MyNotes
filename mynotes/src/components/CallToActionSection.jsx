import React from 'react';
import '../styles/CallToActionSection.css'; // Import external CSS file

function CallToActionSection() {
  return (
    <section className="cta-section">
      <h2>Get Started with Notefy</h2>
      <p>Sign up today and take the first step towards a more organized and productive life.</p>
      <a href="#pricing"><button>Sign Up Now</button></a>
    </section>
  );
}

export default CallToActionSection;
