import React from "react";
import Image from "react-image-resizer";
import { Link } from "react-router-dom";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import sky from "../assets/images/sky.gif";

import TimelineItem from "../components/TimelineItem";

import experience from "../assets/data/experience.json";
import notableAchievements from "../assets/data/notable-achievements.json";

library.add(faGithub, faLinkedin, faEnvelope, faArrowRight);

const Home = () => {
  return (
    <>
      <div class="sky">
        <img src={sky} />
      </div>
      <div className="home">
        <div class="about">
          <h1>Hi, I'm Nicole.</h1>
          <p>Welcome to this little window into my life.</p>
          <p>
            I'm currently a Computer Science student at the University of
            Waterloo. Sometimes I code in my free time - you can check out some
            of my projects{" "}
            <Link class="link" to="/projects">
              here
            </Link>
            .
          </p>
          <p>
            I also enjoy drawing, reading, crocheting, listening to music,
            watching movies and tv shows, and playing video games.
          </p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/nicole-han-20ab31202/"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="https://github.com/nicoella" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="mailto:n2han@uwaterloo.ca" target="_blank">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
          </div>
        </div>

        <h2>Experience</h2>
        {experience.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}

        <h2>Notable Achievements</h2>
        <a href="#/achievements" class="more-info">
          <p class="redirect">
            // &nbsp;Full list of contests and achievements
          </p>
        </a>
        {notableAchievements.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Home;
