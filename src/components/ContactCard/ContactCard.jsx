// components/ContactCard/ContactCard.js
import React from "react";
import './ContactCard.css';

const ContactCard = () => {
  return (
    <div className="contact-card mt-5 p-4">
      <div className="card-image-wrapper">
        <img src="https://darshanraval.netlify.app/assets/images/about/profile_image.jpg" alt="Logo" className="card-logo" />
      </div>
      <h5 className="text-center name">
        Website by <a href="https://darshanraval.netlify.app" target="_blank" rel="noopener noreferrer">Darshan Raval</a>
      </h5>
      <p className="text-center contact-info">
        Reach out at: <a href="mailto:darshanraval3546@gmail.com" className="contact-email">darshanraval3546@gmail.com</a>
      </p>
    </div>
  );
};

export default ContactCard;
