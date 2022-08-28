import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ text, name, designation }) => {
  return (
    <div className="reviewCard">
      <h2>
        <i class="fa-solid fa-quote-left"></i>
      </h2>
      <p className="reviewCard__heading">{text}</p>
      <hr />
      <p className="name">{name}</p>
      <p className="designation">{designation}</p>
    </div>
  );
};

export default ReviewCard;
