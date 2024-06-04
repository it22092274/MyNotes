import React, { useState, useEffect } from 'react';
import '../styles/TestimonialsSection.css'; // Import external CSS file
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function TestimonialsSection() {
  const testimonials = [
    { name: 'Ashan Priyanjana', text: 'Notefy has changed the way I organize my life. Highly recommend!' },
    { name: 'Theekshana Nemindi', text: 'Amazing app with fantastic features. I use it every day!' },
    { name: 'Shamali Herath', text: 'A must-have for anyone looking to improve their productivity.' },
    { name: 'Akila Dananjaya', text: 'Notefy has changed the way I organize my life. Highly recommend!' },
    { name: 'Senali Fonseka', text: 'Amazing app with fantastic features. I use it every day!' },
    { name: 'Livisarani Mallawaarachchi', text: 'A must-have for anyone looking to improve their productivity.' },
    // Add more testimonials here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 700) setMaxVisible(1);
      else if (width < 1000) setMaxVisible(2);
      else setMaxVisible(3);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleTestimonials = () => {
    const endIndex = (currentIndex + maxVisible) % testimonials.length;
    if (endIndex > currentIndex) {
      return testimonials.slice(currentIndex, endIndex);
    } else {
      return [
        ...testimonials.slice(currentIndex),
        ...testimonials.slice(0, endIndex),
      ];
    }
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">

        <div className="testimonials-list">
                  <FaArrowLeft className="arrow" onClick={handleLeftClick} />
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
                  <FaArrowRight className="arrow" onClick={handleRightClick} />
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
