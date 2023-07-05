import React from "react";
import Image from "react-image-resizer";
import { Link } from "react-router-dom";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import sky from "../assets/images/sky.png";

import TimelineItem from "../components/TimelineItem";

library.add(faGithub, faLinkedin, faEnvelope);

const Home = () => {
  return (
    <>
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
      <TimelineItem />
    </>
  );
};

export default Home;
