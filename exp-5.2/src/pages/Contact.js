import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2>Contact Page</h2>

        <h3>Khavind Chaudhary</h3>
        <p><strong>UID:</strong> 23BAI71448</p>

        <div className="contact-details">
          <p><strong>Gmail:</strong> KhavindChaudhary@gmail.com</p>
          <p><strong>Mobile:</strong> 82392932893</p>
        </div>

        <p className="lazy-text">
          This page is lazy loaded when route is accessed.
        </p>
      </div>
    </div>
  );
}

export default Contact;