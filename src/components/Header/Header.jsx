import React, { useRef, useState } from "react";
import Headerlogo from "./HeaderContent/Headerlogo";
import "./Header.css";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const navRef = useRef();

  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) setShadow(true);
    else setShadow(false);
  });

  const showNavBar = () => {
    navRef.current.classList.toggle("show-nav");
  };

  return (
    <div
      className="header-grid"
      style={shadow ? { boxShadow: "0px 2px 5px rgb(0, 0, 0, 0.4)" } : null}
    >
      <header className="header">
        <Headerlogo />
        <nav ref={navRef} className="header-btns">
          <button onClick={showNavBar} className="show-nav-bar-x">
            X
          </button>
          <a href="#about-us">Sobre mim</a>
          <a href="#products">Produtos</a>
          <a href="#contact">Contato</a>
        </nav>
        <img
          src="https://cdn-icons-png.flaticon.com/512/56/56763.png"
          onClick={showNavBar}
          className="show-nav-bar"
        />
      </header>
    </div>
  );
};

export default Header;
