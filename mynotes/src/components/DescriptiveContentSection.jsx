import React from 'react';
import { FaUserAlt, FaTasks, FaCloud, FaLock, FaCogs } from 'react-icons/fa';
import '../styles/DescriptiveContentSection.css'; // Import external CSS file

function DescriptiveContentSection() {
  const features = [
    { icon: <FaUserAlt />, title: 'Intuitive Interface', description: 'Our user-friendly design makes it easy for anyone to start taking notes immediately.' },
    { icon: <FaTasks />, title: 'Robust Features', description: 'From text formatting to file attachments, Notefy has everything you need to create detailed and organized notes.' },
    { icon: <FaCloud />, title: 'Cloud Sync', description: 'Access your notes from anywhere with our seamless cloud synchronization.' },
    { icon: <FaLock />, title: 'Top-Notch Security', description: 'Your data is safe with us. We prioritize your privacy and data security.' },
    { icon: <FaCogs />, title: 'Customization', description: 'Personalize your note-taking experience with customizable themes and settings.' },
  ];

  return (
    <section className="descriptive-content-section">
      <div className="contents">
        <h2>Why Choose Notefy?</h2>
        <p style={{textAlign: "center"}}>Notefy is not just another note-taking app; it's a comprehensive tool designed to help you stay organized and productive. Here are some reasons why you should choose Notefy:</p>
        <div className="datacontent features">
          {features.map((feature, index) => (
            <div key={index} className="item feature" style={{ '--i': index }}>
              <div className="icon">{feature.icon}</div>
              <div className="details">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{textAlign: "center"}}>Join thousands of satisfied users and experience the difference with Notefy. Your productivity journey starts here!</p>
      </div>
    </section>
  );
}

export default DescriptiveContentSection;
