import React from "react";

const Progress = ({ title, value }) => {
  return (
    <div className="progress-container">
      <h4>{title}</h4>
      <div className="progress-bar">
       
        <div className={value > 0 ? "progress-bar--level progress-bar--level__filled" : "progress-bar--level"}></div>
        <div className={value > 1 ? "progress-bar--level progress-bar--level__filled" : "progress-bar--level"}></div>
        <div className={value > 2 ? "progress-bar--level progress-bar--level__filled" : "progress-bar--level"}></div>
      </div>
    </div>
  );
};

export default Progress;
