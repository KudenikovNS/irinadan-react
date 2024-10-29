import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

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
          <Link className="nav__link header__link" to="/#info">
            Работа <br />
            психолога
          </Link>
        </li>
        <li>
          <Link className="nav__link header__link" to="/education">
            Образование и <br /> квалификация
          </Link>
        </li>
        <li>
          <Link className="nav__link header__link" to="/#consultation">
            Психологические <br />
            консультации
          </Link>
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
