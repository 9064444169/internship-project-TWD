import React from "react";
import "./Review.css";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="review">
      <p className="review__title">TESTIMONIALS</p>
      <div className="review__info">
        <h2>What our students want to say...</h2>
        <p>
          This community is built with love! Our focus is to help you get
          results.
        </p>
      </div>
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            <ReviewCard
              text="He is a creative coach. His approach is to the point, crisp and direct with no nonsense attitude.That 's exactly draws me to his webinar. He is the master of his field because after attending his course, I realized, He has done lots of research in his own field before curating his offerings."
              name="Carmen Velasco"
              designation="VP of Marketing, Example"
            />
            <ReviewCard
              text="In ONE WORD, I CAN DEFINE YOU AS A FATECHANGER, You are awesome, My Mission is clear I am Building a System to Transform the Traditional Business Model into Automation Business! Learning from you is a Blessing, Every day Learning from you and growing!"
              name="Micheal Murphy"
              designation="Founder & CEO, Example"
            />
            <ReviewCard
              text="Excellent community! Everything you need to know your set up and run your digital based knowledge business is available in ILH. Highly recommend ut to anyone who wants to succeed in the online world! Thank you Siddharth for the wonderful course."
              name="Alyana Thomson"
              designation="Product Lead, Example"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
