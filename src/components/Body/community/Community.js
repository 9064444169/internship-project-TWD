import React from "react";
import "./Community.css";
import ReactPlayer from "react-player";

const Community = () => {
  return (
    <div className="community">
      <p className="community__title">OUR COMMUNITY</p>
      <h1 className="community__heading">The English Fluency Hub</h1>
      <p className="community__text">
        Many have got good jobs after joining this training programme.
      </p>
      <div className="community__video">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/EqS7NQ7K5FI"
          controls={true}
          width="80vw"
          height="80vh"
        />
      </div>
    </div>
  );
};

export default Community;
