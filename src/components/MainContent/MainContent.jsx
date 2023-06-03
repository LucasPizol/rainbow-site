import React from "react";
import Title from "./MainContentContents/Title";
import Imgs from "./MainContentContents/Imgs";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content-grid">
      <div className="main-content">
        <Title />
        <Imgs />
      </div>
      <img
        src="https://i.ibb.co/rpQNgBC/img-fundo-png.png"
        className="img_fundo"
      />
    </div>
  );
};

export default MainContent;
