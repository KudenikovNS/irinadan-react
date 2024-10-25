import React from 'react';
import './nav.css'

const Nav = () => {
  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu header__nav">
        <li><a className="nav__link header__link" href="#header">Главная <br />страница</a></li>
        <li><a className="nav__link header__link" href="#info">Работа <br />психолога</a></li>
        <li><a className="nav__link header__link" href="./education.html">Образование и <br />квалификация</a></li>
        <li><a className="nav__link header__link" href="#consultation">Психологические <br />консультации</a></li>
        <li><a className="nav__link header__link" href="#footer">Мои <br />контакты</a></li>
      </ul>
    </section>
  );
};

export default Nav;
