import React from "react";
import Image from "react-image-resizer";
import { Link } from "react-router-dom";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import sky from "../assets/images/sky.png";

import TimelineItem from "../components/TimelineItem";

library.add(faGithub, faLinkedin, faEnvelope, faArrowRight);

const Home = () => {
  return (
    <div class="home">
      <Image src={sky} class="center" width={400} height={273} />
      <h1>Hi, I'm Nicole.</h1>
      <p>Welcome to this little window into my life.</p>
      <p>
        I'm currently a Computer Science student at the University of Waterloo.
        Sometimes I code in my free time - you can check out some of my projects
        <Link to="/projects"> here</Link>.
      </p>
      <p>
        I also enjoy drawing, reading, crocheting, listening to music, watching
        movies and tv shows, and playing video games.
      </p>
      <div class="socials">
        <a
          href="https://www.linkedin.com/in/nicole-han-20ab31202/"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="https://github.com/nicoella" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="mailto:nicolehan04@gmail.com" target="_blank">
          <FontAwesomeIcon icon={["fas", "envelope"]} />
        </a>
      </div>
      <h2>Experience</h2>
      <TimelineItem
        year="2023"
        title="Software Developer - Miovision"
        extra="Angular, SCSS, Cypress, TypeScript, RxJS, NestJS"
      />
      <TimelineItem
        year="2022"
        title="Innovation Developer - Royal Bank of Canada"
        description="Created a rewards site for RBC developers which rewards them for contributing to internal GitHub bugs and issues. Worked in weekly Agile sprints."
        extra="Angular, SCSS, MariaDB, TypeScript"
      />
      <TimelineItem
        year="2019 - 2022"
        title="Vice President - Mackenzie Computer Programming Team"
        description="Created competitive programming problems for contests and tutored students in competitive and curriculum programming. Managed a team of executives to deliver weekly lessons and monthly programming competitions."
        extra="Java, C++, Processing"
      />
      <h2>Notable Achievements</h2>
      <a href="/achievements" class="more-info">
        <p class="redirect">// &nbsp;Full list of contests and achievements</p>
      </a>

      <TimelineItem
        year="2022"
        title="René Descartes National Scholarship"
        description="One of approximately 10 recipients chosen based on achievement in academic standing and results in mathematics and computer contests, valued at $20K."
      />
      <TimelineItem
        year="2021"
        title="European Girls' Olympiad in Informatics - Bronze Medalist"
        description="One of four participants selected in Canada. Placed 73rd Internationally, recieved a Bronze Medal."
      />
      <TimelineItem
        year="2021"
        title="CEMC Canadian Computing Competition Senior - Honour Roll"
        description="Placed within the top 5% of competitors."
      />
      <TimelineItem
        year="2021"
        title="American Invitational Mathematics Examination"
        description="Qualified to write AIME based on high performances in the American Mathematics Competition."
      />
      <TimelineItem
        year="2021"
        title="Educational Computing Organization of Ontario (ECOO) Computer Science Competition"
        description="Placed 21st in Ontario out of 473 competitors."
      />
    </div>
  );
};

export default Home;
