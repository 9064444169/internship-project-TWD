import React from "react";
import "./About.css";
import Card from "./Card";

const About = () => {
  return (
    <div className="about">
      <p className="about__title">ABOUT ME</p>
      <div className="about__info">
        <h2>Hi! I'm Shikha Biswas...</h2>
        <p>
          I'm an English trainer and have worked many years in different schools
          as an English teacher. My years of experience have led me to
          understand our broken system of education where students are taught
          only English grammar and not to speak fluently in English. Keeping all
          such problems in mind, I found the English Fluency Hub, where people
          learn to speak fluently in English with accuracy. Many people cracked
          their interviews after joining this training programme and are working
          in big MNC's now.
        </p>
      </div>
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            <Card
              heading="My Mission"
              title="English is one of the most used languages worldwide. My mission is to help people develop fluency in English speaking and achieve their career and business goals."
              image="https://assets.dorik.io/5e373b6c43a72a001f56dbf6/images/undraw_freelancer_b0my_(1)_b34a16hn.svg"
              text="English Fluency"
            />
            <Card
              heading="My Expertise"
              title="With over 5 years of experience in English language teaching, I help people achieve their career and business goals."
              image="https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/undraw_features_overview_jg7a_28ltovnt.svg"
              text="English Training"
            />
            <Card
              heading="My Community"
              title="I found this community to help freshers, professionals and students learn English speaking. "
              image="https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/undraw_walk_in_the_city_1ma6_d7kcaynb.svg"
              text="English Fluency Hub"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
