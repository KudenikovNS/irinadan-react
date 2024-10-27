import React from 'react';

import FooterNav from '../FooterNav/FooterNav';
import BtnReg from '../btnReg/BtnReg';

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__button-container">
          <BtnReg additionalClass="button-reg__footer"/>
          <p className="consultation__copyright footer__consultation_copyright">
            * Во время консультаций, а так же в выходные дни, я не отвечаю на звонки и сообщения.<br />
            Я отвечу Вам при первой возможности.<br />
            Надеюсь на Ваше понимание!
          </p>
        </div>
        <div className="footer__nav">
          <h3 className="footer__title">Социальные сети</h3>
          <FooterNav />
        </div>
      </div>
      <p className="footer__copyright">
        &copy; ЗАО «СовЭкоТех»
      </p>
    </footer>
  );
};

export default Footer;
