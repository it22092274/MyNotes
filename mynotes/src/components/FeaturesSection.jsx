import React from 'react';
import Easy from '../assets/easy.png';
import Org from '../assets/organized.png';
import Sec from '../assets/secured.png';
import '../styles/FeaturesSection.css';

function FeaturesSection() {
  const features = [
    { image: Easy, title: 'Easy to Use', description: 'Intuitive interface that makes note-taking a breeze.' },
    { image: Org, title: 'Organized', description: 'Keep your notes neatly organized and easily accessible.' },
    { image: Sec, title: 'Secure', description: 'Your notes are safe with our top-notch security features.' },
  ];

  return (
    <section className="features-section" id='feartres'>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature" style={{ '--i': index }}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
