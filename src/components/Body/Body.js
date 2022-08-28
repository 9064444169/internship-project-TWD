import React from "react";
import About from "./about";
import Bottom from "./Bottom/Bottom";
import Community from "./community/Community";
import Steps from "./community/Steps";
import Contact from "./Contact/Contact";
import Course from "./Courses/Course";
import Review from "./Reviews/Review";
import Top from "./Top/Top";

const Body = () => {
  return (
    <div>
      <Top />
      <section id="about">
        <About />
      </section>
      <section id="memberships">
        <Community />
      </section>
      <Steps />
      <Course />
      <section id="reviews">
        <Review />
      </section>
      <Bottom />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
