import React from "react";
import { Link } from "react-router-dom";

import info from "../../assets/icons/info-svgrepo-com.png";

import "./consultation.css";

const Consultation = () => {
  return (
    <section className="consultation" id="consultation">
      <div className="reviews">
        <Link className="button-reg-reviews" to="/reviews">
          Отзывы и результаты
        </Link>
      </div>
      <div className="reviews-education">
        <Link className="button-reg-reviews" to="/education">
          Образование и квалификация
        </Link>
      </div>
      <div className="consultation__container-price-contract">
        <a
          href="https://drive.google.com/file/d/1ck38iQM_sYhbbBL5uYcOeFgxP2pOGNNk/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="consultation__link consultation__link_margin"
        >
          Прайс на услуги
        </a>
        <a
          href="https://drive.google.com/file/d/1bxDUI3gpzzRb5AttT0T0OWNvaa2svBv0/view?usp=sharing"
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
              Надвигающуюся хандру, тоску или депрессивное состояние
              (немедицинской этиологии) можно преодолеть только конкретными
              действиями.
              <br />
              Если у Вас медицинская (клиническая) депрессия – вы уже несколько
              месяцев: не встаёте с кровати, у вас непрекращающаяся беспричинная
              апатия, не хочется мыться, чистить зубы, выходить из дома и т.д -
              ВАМ НЕОБХОДИМА ПОМОЩЬ МЕДИЦИНСКОГО ПСИХОТЕРАПЕВТА!
              <br />
              Если тоскливое состояние начало накатывать относительно недавно,
              случается время от времени, связана с какими-то событиями
              (расставание, неудача на работе, ссора с подругой, не достигнута
              цель и пр.) - то этот ЧЕК-ЛИСТ поможет вам выбраться из хандры.
              <br />
              Делаем это каждый день!
              <br />
              Не пропуская, не оправдываясь, не халтуря!
              <br />
              Можете начать в любое время дня и ночи.
              <br />
              Если начнете с утра, уже к вечеру почувствуете, что депрессия
              отступает!
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1lluziHJHHpOmq3jPdZWNX5WPdPj4G6Z4/view?usp=sharing"
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
            href="https://drive.google.com/file/d/1lluziHJHHpOmq3jPdZWNX5WPdPj4G6Z4/view?usp=sharing"
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
            href="https://drive.google.com/file/d/1wMBvhHv0rwe2W_qr7tOt-66D0cIpbI0Q/view?usp=sharing"
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
            href="https://drive.google.com/file/d/1qINIg2I3RhIpOZNAjkSWEbK35fVTIAt8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="consultation__link consultation__link_margin"
          >
            Тест
          </a>
        </div>
      </div>
      <p className="consultation__copyright">
        * Все материалы данного сайта являются объектами авторского права (в том
        числе дизайн). Запрещается копирование, распространение (в том числе
        путем копирования на другие сайты и ресурсы в Интернете) или любое иное
        использование информации и объектов без предварительного согласия
        правообладателя.
      </p>
    </section>
  );
};

export default Consultation;
