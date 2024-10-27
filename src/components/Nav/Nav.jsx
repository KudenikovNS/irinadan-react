import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu header__nav">
        <li>
          <Link className="nav__link header__link" to="/">
            Главная <br />
            страница
          </Link>
        </li>
        <li>
          <a className="nav__link header__link" href="#info">
            Работа <br />
            психолога
          </a>
        </li>
        <li>
          <Link className="nav__link header__link" to="/education">
            Образование и <br /> квалификация
          </Link>
        </li>
        <li>
          <a className="nav__link header__link" href="#consultation">
            Психологические <br />
            консультации
          </a>
        </li>
        <li>
          <a className="nav__link header__link" href="#footer">
            Мои <br />
            контакты
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
