import React from "react";

import './styles.css';

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div>
        Новостник
        <div className="small">Single Page Application</div>
      </div>
      <div className="small">
        Новостной проект
      </div>
      <div>
        <div className="small">Made by</div>
        Иван Пантюхин
      </div>
    </footer>
  );
}

export default Footer;