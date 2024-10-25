import React from 'react';
import "./btnreg.css"

const BtnReg = ({ additionalClass = '' }) => {
  return (
    <a
      href="https://t.me/irdan_psy/"
      className={`button-reg ${additionalClass}`}
      target="_blank"
      rel="noreferrer"
    >
      Записаться на консультацию
    </a>
  );
};

export default BtnReg;
