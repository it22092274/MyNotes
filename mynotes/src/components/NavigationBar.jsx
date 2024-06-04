import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import '../styles/NavigationBar.css'; // Import external CSS file
import Sidebar from './Sidebar';

function NavigationBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="left">
          <FaBars onClick={toggleSidebar} className="hamburger-icon" />
          <p>Notefy</p>
        </div>
        <div className="social-media-icons">
          <FaFacebook />
          <FaGithub />
          <FaYoutube />
          <FaWhatsapp />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
}

export default NavigationBar;
