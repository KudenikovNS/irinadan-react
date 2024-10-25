import React from 'react';

import info from "../../assets/info-svgrepo-com.png"

import "./consultation.css"

const Consultation = () => {
  return (
    <section className="consultation" id="consultation">
      <div className="reviews">
        <a href="./reviews.html" className="button-reg-reviews">
          Отзывы и результаты
        </a>
      </div>
      <div className="reviews-education">
        <a href="./education.html" className="button-reg-reviews">
          Образование и квалификация
        </a>
      </div>
      <div className="consultation__container-price-contract">
        <a
          href="https://drive.google.com/file/d/1IUfJNEQDcqUKH_71dKKqK3lpOBiAWKo6/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="consultation__link consultation__link_margin"
        >
          Прайс на услуги
        </a>
        <a
          href="https://drive.google.com/file/d/13lszZPTBPFoB2EkpnHZfFwEW4uBrvKVI/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="consultation__link"
        >
          Контракт Психолога и Клиента
        </a>
      </div>
      <h2
        className="consultation__title consultation__title_margin"
        id="consultation__check-list"
      >
        Чек-листы и тесты*
      </h2>
      <div className="consultation__table">
        <div className="consultation__table-item">
          <div className="consultation__info block">
            <p className="consultation__table-title-check-list">
              КАК ИЗБАВИТЬСЯ ОТ ДЕПРЕССИИ
            </p>
            <img
              className="consultation__info-img hover"
              src={info}
              alt="Информация"
            />
            <p className="hidden">
              Надвигающуюся хандру, тоску или депрессивное состояние (немедицинской этиологии) можно преодолеть только конкретными действиями.<br />
              Если у Вас медицинская (клиническая) депрессия – вы уже несколько месяцев: не встаёте с кровати, у вас непрекращающаяся беспричинная апатия, не хочется мыться, чистить зубы, выходить из дома и т.д - ВАМ НЕОБХОДИМА ПОМОЩЬ МЕДИЦИНСКОГО ПСИХОТЕРАПЕВТА!<br />
              Если тоскливое состояние начало накатывать относительно недавно, случается время от времени, связана с какими-то событиями (расставание, неудача на работе, ссора с подругой, не достигнута цель и пр.) - то этот ЧЕК-ЛИСТ поможет вам выбраться из хандры.<br />
              Делаем это каждый день!<br />
              Не пропуская, не оправдываясь, не халтуря!<br />
              Можете начать в любое время дня и ночи.<br />
              Если начнете с утра, уже к вечеру почувствуете, что депрессия отступает!
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1FH2brAg0To2KPNbwUkZYwIx5FcnK0gFP/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="consultation__link consultation__link_margin"
          >
            Чек-лист
          </a>
        </div>
        <div className="consultation__table-item">
          <p className="consultation__table-title-check-list">
            СКРЫТЫЙ НАРЦИССИЗМ ПАРТНЕРА
          </p>
          <a
            href="https://drive.google.com/file/d/1eshmPXF4f6q-UVC10H7S4lKAYojYY1wY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="consultation__link consultation__link_margin consultation__link-check-list"
          >
            Тест
          </a>
        </div>
        <div className="consultation__table-item">
          <p className="consultation__table-title-check-list">
            СКЛОННОСТЬ К СОЗАВИСИМОСТИ
          </p>
          <a
            href="https://drive.google.com/file/d/1bUpL60-vRaw5nu2vpNKYHa4K_0gJmWyg/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="consultation__link consultation__link_margin"
          >
            Тест
          </a>
        </div>
        <div className="consultation__table-item">
          <p className="consultation__table-title-check-list">
            СКРЫТЫЙ ПЕРФЕКИОНИЗМ
          </p>
          <a
            href="https://drive.google.com/file/d/1VzTXPLMF9AAMGSw5qgG79SdzjxrqToKZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="consultation__link consultation__link_margin"
          >
            Тест
          </a>
        </div>
      </div>
      <p className="consultation__copyright">
        * Все материалы данного сайта являются объектами авторского права (в том числе дизайн). Запрещается копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в Интернете) или любое иное использование информации и объектов без предварительного согласия правообладателя.
      </p>
    </section>
  );
};

export default Consultation;
