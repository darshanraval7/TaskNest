// components/ContactCard/ContactCard.js
import React from "react";
import './ContactCard.css';

const ContactCard = () => {
  return (
    <div className="contact-card mt-5 p-3">
      <h5 className="text-center">
        Website by <a href="https://darshanraval.netlify.app" className="name">Darshan Raval</a>
      </h5>
      <p className="text-center">
        Reach out at: <a href="mailto:darshanraval3546@gmail.com" className="contact-email">darshanraval3546@gmail.com</a>
      </p>
    </div>
  );
};

export default ContactCard;
