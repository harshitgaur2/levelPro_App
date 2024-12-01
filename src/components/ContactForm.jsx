import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="contact-container">
      <button className="contact-btn" onClick={toggleForm}>
        Contact Now
      </button>

      {/* Contact Form */}
      {isFormOpen && (
        <div className="form-popup">
          <div className="form-container">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
            <button className="close-btn" onClick={toggleForm}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
