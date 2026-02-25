import React from "react";
import Image from "react-image-resizer";
import { Link } from "react-router-dom";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import bunnyheader from "../assets/images/bunny-header.png";

import notableAchievements from "../assets/data/notable-achievements.json";

library.add(faGithub, faLinkedin, faEnvelope, faArrowRight);

const Home = () => {
  return (
    <>
      
      <div className="content" style={{ paddingTop: "150px" }}>
        <div class="about">
          <div className="bunny-wrapper">
            <div className="bunny-text">
              <h1>nicole han</h1>
              <p style={{ marginBottom: "0", paddingBottom: "0" }}>hi! i'm a <span className="highlight">computer science</span> student @ the <span className="highlight">university of waterloo</span>, currently a software engineer intern @ <span className="highlight">stripe</span> in seattle!</p>
            </div>
            <div class="bunny-img">
              <img src={bunnyheader} />
            </div>
          </div>
          <p>i'm big fan of: minecraft, animal crossing, slime rancher, pikmin bloom, & stardew valley <span className="keep-together">₍ᐢ.  ̫ .ᐢ₎</span> </p>
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
      </div>
    </>
  );
};

export default Home;
