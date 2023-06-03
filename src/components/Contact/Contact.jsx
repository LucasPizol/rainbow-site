import React from "react";
import "./Contact.css";
import RedirectPages from "./RedirectPages";
import City from "./City";

const Contact = () => {
  return (
    <div className="contact-grid" id="contact">
      <div className="contact-div">
        <h1>Contato</h1>
        <div className="contact-div-bottom">
          <RedirectPages />
          <City />
        </div>
      </div>
    </div>
  );
};

export default Contact;
