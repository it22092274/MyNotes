import React from 'react';
import '../styles/FAQSection.css'; // Import external CSS file

function FAQSection() {
  return (
    <section className="faq-section">
      <div className="content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is Notefy?</h3>
          <p>Notefy is a powerful and intuitive note-taking application designed to help you stay organized and productive.</p>
        </div>
        <div className="faq-item">
          <h3>Is Notefy free to use?</h3>
          <p>Yes, Notefy offers a free plan with basic features. We also offer premium plans with additional features.</p>
        </div>
        <div className="faq-item">
          <h3>Can I access my notes on multiple devices?</h3>
          <p>Yes, Notefy syncs your notes across all your devices using cloud synchronization.</p>
        </div>
        <div className="faq-item">
          <h3>How secure is my data on Notefy?</h3>
          <p>Your data is highly secure with Notefy. We use advanced encryption methods to protect your information.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
