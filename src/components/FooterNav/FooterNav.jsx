import youtube from "../../assets/icons/YouTube_32px.png"
import telegram from "../../assets/icons/telegram_32px.png"
import tiktok from "../../assets/icons/tikTok_32px.png"
import b17 from "../../assets/icons/b17_32px.png"

import './footerNav.css'

const FooterNav = () => {
  return (
    <nav className="footer__container-icon">
      <a
        className="footer__icon"
        href="https://www.youtube.com/channel/UCmuan8nmML-u91NEgtevegg/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={youtube} alt="YouTube" />
      </a>
      <a
        className="footer__icon"
        href="https://t.me/irdan_psy1"
        target="_blank"
        rel="noreferrer"
      >
        <img src={telegram} alt="Telegram" />
      </a>
      <a
        className="footer__icon"
        href="https://vt.tiktok.com/ZSdyPUQHV/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={tiktok} alt="Tik-Tok" />
      </a>
      <a
        className="footer__icon"
        href="https://www.b17.ru/psy_academician/?prt=682304"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footer__icon_size"
          src={b17}
          alt="b17"
        />
      </a>
    </nav>
  );
};

export default FooterNav;
