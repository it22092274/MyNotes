import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaInfoCircle } from 'react-icons/fa';
import '../styles/NavigationBar.css'; // Import external CSS file

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="close-btn">&times;</button>
      </div>
      <ul>
        <li>
          <Link to="/" onClick={toggleSidebar}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <a href="#about" onClick={toggleSidebar}>
            <FaUser /> About
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={toggleSidebar}>
            <FaInfoCircle /> Pricing
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleSidebar}>
            <FaInfoCircle /> Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
