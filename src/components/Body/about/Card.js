import React from "react";
import "./Card.css";

const Card = ({ title, image, heading, text }) => {
  return (
    <div className="product">
      <p className="product__heading">{heading}</p>
      <img src={image} alt={title} />
      <h3>{text}</h3>
      <div className="product__info">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
