import React from 'react';
import '../styles/ContactUsSection.css'; // Import external CSS file

function ContactUsSection() {
  return (
    <section className="contact-us-section" id='contact'>
      <div className="content">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further assistance, feel free to reach out to us.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUsSection;
