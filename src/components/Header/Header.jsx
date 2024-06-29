import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <h1>ULTIMOS PLACARES DE JOGOS DE FUTEBOL</h1>
      <div className="quadrado"></div>
      <h2>
        Não gosta de futebol?{" "}
        <a href="https://google.com" target="_blank">
          Sai daqui
        </a>
      </h2>
      <p>
        Aqui está a lista dos ultimos placares de futebol, pra quem quer
        ne........
      </p>
    </div>
  );
};

export default Header;
