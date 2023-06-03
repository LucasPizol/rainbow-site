import React from "react";
import FirstRow from "./First-Row/FirstRow";
import SecondRow from "./Second-Row/SecondRow";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-grid" id="about-us">
      <div className="about-us-content">
        <h1>Sobre mim</h1>
        <FirstRow />
        <SecondRow />
      </div>
    </div>
  );
};

export default AboutUs;
