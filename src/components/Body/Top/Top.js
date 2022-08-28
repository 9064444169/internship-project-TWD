import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div className="top">
      <div className="top__left">
        <p className="top__title">ENGLISH LANGUAGE TRAINER</p>
        <h1 className="top__heading">
          Learn how to speak fluent English in 6 easy steps.
        </h1>
        <p className="top__text">
          Learn how to communicate with others effectively in English in just 90
          days.
        </p>
        <button className="top__button">Download free PDF!</button>
        <p className="top__text">
          I have spent more than 5 years learning over this topic.
        </p>
      </div>

      <div className="top__right">
        <img
          src="https://cdn.dorik.com/62f3783236366c00291245be/62f378d736366c00291245c8/images/WhatsApp_Image_2021-11-01_at_2.29.08_PM__1___1_-removebg-preview_azj3scqr.png"
          alt="Shikha Biswas"
        />
      </div>
    </div>
  );
};

export default Top;
