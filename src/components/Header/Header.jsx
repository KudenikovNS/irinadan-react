import React from 'react';
import Nav from '../Nav/Nav';
import BtnReg from '../btnReg/BtnReg';
import HeaderText from '../HeaderText/HeaderText';

import './header.css'


const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__img">
        <div className="header__container">
          <Nav />
          <HeaderText />
          <BtnReg />
          <h1 className="header__title">Психолог Ирина Дан</h1>
          <p className="header__subtitle">&nbsp;</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
