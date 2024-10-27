import React from "react";
import { diplomas } from "../../helpers/diplomasData.js";
import { reviews } from "../../helpers/reviewsData.js";
import "./education.css";

const Item = ({
  imgSrc,
  imgAlt,
  description,
  index,
  offset,
  slideClass,
  subtitleClass,
}) => (
  <div className={index + offset < 19 ? slideClass : `${slideClass}-2`}>
    <img className="item__image" src={imgSrc} alt={imgAlt} />
    {description && (
      <p className={index + offset < 19 ? subtitleClass : `${subtitleClass}-2`}>
        {description}
      </p>
    )}
  </div>
);

const Group = ({ items, groupClass, offset, slideClass, subtitleClass }) => (
  <div className={groupClass}>
    {items &&
      items.map((item, index) => (
        <Item
          key={index}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          description={item.description}
          index={index}
          offset={offset}
          slideClass={slideClass}
          subtitleClass={subtitleClass}
        />
      ))}
  </div>
);

const Education = () => {
  return (
    <section className="education">
      <h2 className="education__title title education__education-title">
        Образование и квалификация
      </h2>
      <div className="education__items">
        <Group
          items={diplomas.slice(0, 19)}
          groupClass="education__items-group"
          offset={0}
          slideClass="education__slide"
          subtitleClass="education__diploms-subtitle"
        />
        <Group
          items={diplomas.slice(19)}
          groupClass="education__items-group-2"
          offset={19}
          slideClass="education__slide"
          subtitleClass="education__diploms-subtitle"
        />
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className="education">
      <h2 className="education__title title education__education-title">
        Отзывы и результаты
      </h2>
      <div className="education__items">
        <Group
          items={reviews.slice(0, 19)}
          groupClass="education__items-group"
          offset={0}
          slideClass="education__slide"
          subtitleClass="education__diploms-subtitle"
        />
      </div>
    </section>
  );
};

export { Education, Reviews };
