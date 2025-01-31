import React from "react";
import "./header.css";
import smallRight from "../assets/assets/icons/small-right.png";
import smallLeft from "../assets/assets/icons/small-left.png";
import search from "../assets/assets/icons/search.png";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="" />
        </button>
        <span className="arrow-right">
          <img src={smallRight} alt="" />
        </span>
      </div>
      <div className="header__search">
        <img src={search} alt="" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
