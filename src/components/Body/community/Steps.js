import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div className="steps">
      <div className="steps1">
        <div className="steps1__left">
          <p className="steps1__title">Step 1</p>
          <h1 className="steps1__heading">Start speaking in English</h1>
          <p className="steps1__text">
            Practise speaking in English with our experts and develop fluency in
            the language.
          </p>
        </div>

        <div className="steps1__right">
          <img
            src="https://assets.dorik.io/5e373b6c43a72a001f56dbf6/images/undraw_freelancer_b0my_(1)_b34a16hn.svg"
            alt=""
          />
        </div>
      </div>

      <div className="steps2">
        <div className="steps2__left">
          <img
            src="https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/undraw_scrum_board_cesn_edbgdlvi.svg"
            alt=""
          />
        </div>

        <div className="steps2__right">
          <p className="steps2__title">Step 2</p>
          <h1 className="steps2__heading">Vocabulary and Pronunciation</h1>
          <p className="steps2__text">
            Learn new words and phrases. Learn how to use them while speaking.
            Improve your pronunciation and get clarity in your speech.
          </p>
        </div>
      </div>

      <div className="steps3">
        <div className="steps3__left">
          <p className="steps3__title">Step 3</p>
          <h1 className="steps3__heading">Improve accurecy in the language</h1>
          <p className="steps3__text">
            Learn to speak correctly with the usage of basic grammar. Learn
            grammar in few easy steps and understand how to use them while
            speaking
          </p>
        </div>

        <div className="steps3__right">
          <img
            src="https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/undraw_walk_in_the_city_1ma6_d7kcaynb.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
