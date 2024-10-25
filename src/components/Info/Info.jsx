import React from "react";

import YouTubeLite from "../YouTubeLite/YouTubeLite ";

import "./info.css";
import marks from "../../assets/marks.svg";

const Info = () => {
  return (
    <section className="info" id="info">
      <img className="info__marks" src={marks} alt="Кавычки" />
      <div className="info__container">
        <p className="info__text">
          Приветствую вас на моём сайте! Меня зовут Ирина Дан.
        </p>
        <p className="info__text">
          Я профессиональный психолог. Работаю в интегративном подходе и
          специализируюсь в когнитивно-поведенческой психотерапии третьей волны.
        </p>
        <p className="info__text">
          Мой нескончаемый интерес и хобби - новые подходы и открытия в
          психологии и нейрофизиологии. Также я веду свой канал на Ютуб. Там вы
          можете найти много интересного из психологии и психотерапии.
        </p>
        <p className="info__text">
          Если вы зашли на мой сайт, значит у вас возникла мысль обратиться за
          психологической помощью.
        </p>
        <p className="info__text">
          Записывайтесь ко мне на консультацию, и мы обсудим возникшие у вас
          трудности.
        </p>
      </div>
      <div className="info__video-img">
        <YouTubeLite videoId="ums7O44Jrm4" />
        <YouTubeLite videoId="2fvHXx_X-oI" additionalClass="close" />
        <YouTubeLite videoId="N6Ou0Up9d0A" />
      </div>
    </section>
  );
};

export default Info;

{
  /* <iframe
className="info__video"
src="https://www.youtube.com/embed/OesDVPYSMFw?controls=0"
title="YouTube video player"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe>
<iframe
className="info__video close"
src="https://www.youtube.com/embed/R41rRiKeiM4?controls=0"
title="YouTube video player"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe>
<iframe
className="info__video"
src="https://www.youtube.com/embed/QW_nld1-4dI?controls=0"
title="YouTube video player"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe> */
}
