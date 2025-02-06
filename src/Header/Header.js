import React from "react";
import "./Header.css";
import search from "../assets/icons/search.png";
import "bootstrap-icons/font/bootstrap-icons.css";


const Header = ({ setSearchTerm }) => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
        <i class="bi bi-arrow-left-circle-fill"></i>
        </button>
        <button className="arrow-right">
        <i class="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>

      <div className="header__search">
        <img src={search} alt="Buscar" />
        <input
          type="text"
          id="search-input"
          placeholder="O que você quer ouvir?"
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado de busca no App.js
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