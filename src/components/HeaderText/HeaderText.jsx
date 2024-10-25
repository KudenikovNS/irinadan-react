import React from 'react';

import './headerText.css'

const HeaderText = () => {
  return (
    <p className="header_text">
      Уважаемые клиенты и гости моего сайта и канала! <br />
      Аккаунт в Телеграм, привязанный к предыдущему номеру телефона, более не работает. Если вы писали мне сообщение в удаленный аккаунт, я прошу вас продублировать его в новый чат в Телеграм. <br />
      С любовью и уважением, Ваш психолог Ирина Дан. <br />
      <a href="https://t.me/irdan_psy/" target="_blank" rel="noreferrer" className="header_text_link">
        @Irdan_psy
      </a>
    </p>
  );
};

export default HeaderText;
