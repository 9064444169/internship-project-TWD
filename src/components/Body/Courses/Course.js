import React from "react";
import "./Courses.css";

const Course = () => {
  return (
    <div className="course">
      <p className="course__title">COURSES</p>
      <div className="course__info">
        <h2>Simple Process to Get Started</h2>
        <p>
          We have various membership levels to cater to your needs. Attend my
          upcoming webinar to find out more and start honing your English.
        </p>
      </div>
      <div className="courses">
        <div className="course1">
          <img
            src="https://internetlifestylehub.com/wp-content/uploads/2022/07/ILH-Icons-Silver.png"
            alt=""
          />
          <p>Spoken English</p>
          <h2 className="course1__heading">₹ 11,999</h2>
          <ul className="course1__list">
            <li>Easy courses to get started</li>
            <li>Weekly Coaching</li>
            <li>90-Day Challenge</li>
            <li>Basic Certification</li>
            <li>Private Network</li>
            <li>Support Forum</li>
          </ul>
          <button className="course1__btn">
            <a
              href="https://www.instamojo.com/sidz/freedom-business-bundle/"
              target="_blank"
              rel="noreferrer"
            >
              Get Started
            </a>
          </button>
        </div>

        <div className="course2">
          <div className="course2">
            <img
              src="https://internetlifestylehub.com/wp-content/uploads/2022/07/ILH-Icons-Gold-small.png"
              alt=""
            />
            <p>Writing Blogs</p>
            <h2 className="course2__heading">₹ 49,999</h2>
            <ul className="course1__list">
              <li>Everything in Spoken English </li>
              <li>improving writing skills</li>
              <li>Learn using advanced grammar</li>
              <li>Accuracy while writing</li>
              <li>
                Learn to use various vocabulary <br /> and phrases.
              </li>
              <li>Tactical Knowledge</li>
            </ul>
            <button className="course2__btn">Launching Soon</button>
          </div>
        </div>

        <div className="course3">
          <div className="course3">
            <img
              src="https://internetlifestylehub.com/wp-content/uploads/2022/07/ILH-Icons-Diamond-small.png"
              alt=""
            />
            <p>Personal Development</p>
            <h2 className="course3__heading">₹ 99,999</h2>
            <ul className="course1__list">
              <li>
                Everything in spoken English <br /> Writing skills{" "}
              </li>
              <li>Weekly Audits</li>
              <li>Accounability System</li>
              <li>Gamification Points</li>
              <li>Annual Certification</li>
              <li>Priority Support</li>
            </ul>
            <button className="course2__btn">Launching Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
