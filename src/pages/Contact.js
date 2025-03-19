import React from "react";
import email from "../assets/email.jpg";
import phone from "../assets/phone.jpg";
import loc from "../assets/loc.png";
import "../style-contact.css";

const Contact = () => {

  return (
    <div className="contact-container">
      <p className="one">Contact Me</p>
      {/*Contact Info*/}
        <div className="contact-info">
          <img src={email} alt="Email icon" className="email-icon"></img>
          <p>21jr1a05f5@gmail.com</p>
        </div>
        <div className="contact-info">
          <img src={phone} alt="Phone icon" className="phone-icon"></img>
          <p>9160543373</p>
        </div>
        <div className="contact-info">
          <img src={loc} alt="loc icon" className="loc-icon"></img>
          <p>Sattenapalle, Andhra Pradesh, India, Pin Code: 522403</p>
        </div>
    </div>
  );
};

export default Contact;