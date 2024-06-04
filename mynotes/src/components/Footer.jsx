import React from 'react';
import { FaFacebook, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css'; // Import external CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <FaFacebook />
        <FaGithub />
        <FaYoutube />
        <FaWhatsapp />
      </div>
      <p>© 2023 Notefy. All rights reserved.</p>
      <div className="footer-nav">
        <a href="/contact">Contact</a>
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
