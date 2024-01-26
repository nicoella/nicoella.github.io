import React, { useEffect } from "react";

import "./Achievements.css";

import TimelineItem from "../components/TimelineItem";

import achievements from "../assets/data/achievements.json";

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="achievements">
      <h1>Achievement History</h1>
      <p class="intro">
        This chronological list includes my relatively notable achievements and
        contest results.
      </p>
      {achievements.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Achievements;
