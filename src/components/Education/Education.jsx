import React from "react";
import { diplomas } from "../../helpers/diplomasData.js";
import "./education.css";

const DiplomaItem = ({ imgSrc, imgAlt, description, index, offset }) => (
  <div
    className={index + offset < 19 ? "education__slide" : "education__slide-2"}
  >
    <img className="education__diploms-item" src={imgSrc} alt={imgAlt} />
    <p
      className={
        index + offset < 19
          ? "education__diploms-subtitle"
          : "education__diploms-subtitle-2"
      }
    >
      {description}
    </p>
  </div>
);

const DiplomaGroup = ({ items, groupClass, offset }) => (
  <div className={groupClass}>
    {items.map((item, index) => (
      <DiplomaItem
        key={index}
        imgSrc={item.imgSrc}
        imgAlt={item.imgAlt}
        description={item.description}
        index={index}
        offset={offset}
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
        <DiplomaGroup
          items={diplomas.slice(0, 19)}
          offset={0}
          groupClass="education__items-group"
        />
        <DiplomaGroup
          items={diplomas.slice(19)}
          offset={19}
          groupClass="education__items-group-2"
        />
      </div>
    </section>
  );
};

export default Education;
