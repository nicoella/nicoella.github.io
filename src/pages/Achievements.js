import React, { useEffect } from "react";

import "./Achievements.css";

import TimelineItem from "../components/TimelineItem";

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
      <TimelineItem
        year="2022"
        title="Computer Programming Excellence Graduation Award"
        description="Selected as singular recipient in the graduating class for high achievements in computer programming."
      />
      <TimelineItem
        year="2022"
        title="René Descartes National Scholarship"
        description="One of approximately 10 recipients chosen based on achievement in academic standing and results in mathematics and computer contests, valued at $20K."
      />
      <TimelineItem
        year="2021"
        title="European Girls' Olympiad in Informatics - Bronze Medalist"
        link="https://stats.egoi.org/editions/2021/delegations/CAN/"
        description="One of four participants selected in Canada. Placed 73rd Internationally, recieved a Bronze Medal."
      />
      <TimelineItem
        year="2021"
        title="American Invitational Mathematics Examination"
        description="Qualified to write AIME based on high performances in the American Mathematics Competition."
      />
      <TimelineItem
        year="2021"
        title="CEMC Canadian Computing Competition Senior Honour Roll"
        link="https://www.cemc.uwaterloo.ca/contests/past_contests/2021/2021CCCResults.pdf"
        description="Placed within the top 5% of competitors."
      />
      <TimelineItem
        year="2021"
        title="Educational Computing Organization of Ontario (ECOO) Computer Science Competition"
        description="Placed 21st in Ontario out of 473 competitors."
      />
      <TimelineItem
        year="2021"
        title="CEMC Hypatia Mathematics Competition Honour Roll"
        link="https://www.cemc.uwaterloo.ca/contests/past_contests/2021/2021FGHResults.pdf"
        description="Placed within the top 5% of competitors."
      />
      <TimelineItem
        year="2020"
        title="Toshiba ExploraVision USA and Canada Science Competition"
        link="https://www.exploravision.org/"
        description="Designed an artificial neuron to control body tremors. Regional Team Winner, placed first in Canada and parts of the USA."
      />
      <TimelineItem
        year="2020"
        title="hths.hacks() Hackathon"
        link="https://devpost.com/software/grocery-run-covid-19-edition"
        description="Won the Best Gaming Award out of 258 teams."
      />
      <TimelineItem
        year="2020"
        title="CEMC Cayley Mathematics Competition Honour Roll"
        link="https://www.cemc.uwaterloo.ca/contests/past_contests/2020/2020CayleyResults.pdf"
        description="Placed within the top 5% of competitors."
      />
      <TimelineItem
        year="2019"
        title="CEMC Canadian Intermediate Mathematics Competition Honour Roll"
        link="https://www.cemc.uwaterloo.ca/contests/past_contests/2019/2019CxMCResults.pdf"
        description="Placed within the top 5% of competitors."
      />
      <TimelineItem
        year="2019 - 2020"
        title="Academic Achievement Award"
        description="Received the award for Mathematics (Grade 9 and 10) and Introduction to Computer Science (Grade 10 and 11) for having the highest academic achievement in these courses."
      />
      <TimelineItem
        year="2019"
        title="CEMC Fryer Mathematics Competition Honour Roll"
        link="https://www.cemc.uwaterloo.ca/contests/past_contests/2019/2019FGHResults.pdf"
        description="Placed within the top 5% of competitors."
      />
      <TimelineItem
        year="2019"
        title="FIRST Robotics Ryerson University Event Champion"
        description="Top team in the event."
      />
    </div>
  );
};

export default Achievements;
