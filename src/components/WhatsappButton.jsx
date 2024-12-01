import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = ({ phoneNumber = "1234567890", message = "Hello, I need assistance!" }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-container">
      {/* Tooltip text */}
      <div className="tooltip-text">Click here to know more</div>

      {/* WhatsApp button */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
