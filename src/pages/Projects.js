import React, { useEffect } from "react";
import "./Projects.css";

import Project from "../components/Project";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="projects">
      <h1>Project Showcase</h1>
      <a href="#/projects-full">
        <p class="redirect">// &nbsp;Full projects archive</p>
      </a>
      <Project
        image={require("../assets/images/wizardcats.jpg")}
        title="Wizard Cats"
        year="09/2022"
        github="https://github.com/nicoella/wizard-cats"
        description="An online real-time 1 vs 1 shooter with an algorithm to detect spell drawing. All art is custom drawn."
        tech="Firebase, Phaser, JavaScript, HTML, CSS, Aseprite"
      />
      <Project
        image={require("../assets/images/growthmodel.png")}
        title="Population Growth Model"
        year="01/2022"
        github="https://github.com/nicoella/Population-Growth-Model"
        description="A mathematical model to simulate and compare natural and population growth models."
        tech="Java, Processing"
      />
      <Project
        image={require("../assets/images/ontrack.png")}
        title="OnTrack"
        year="08/2021"
        github="https://github.com/nicoella/OnTrack"
        link="http://ontrackdemo.000webhostapp.com/"
        description="A website to connect patients with their dietician and help make a healthy eating plan and keep track of goals."
        tech="HTML, CSS, PHP, MySQL"
      />
      <Project
        image={require("../assets/images/birthdaybash.png")}
        title="Covid Birthday Bash"
        year="06/2020"
        github="https://github.com/nicoella/Covid-Birthday-Bash"
        description="An interactive video game about staying safe during the pandemic at a birthday party. All art is custom drawn."
        tech="Java, Aseprite"
      />
      <Project
        image={require("../assets/images/pokemon.png")}
        title="Pokémon Discord Bot"
        year="05/2020"
        github="https://github.com/nicoella/Pokemon-Bot"
        description="A Discord bot to detect any Pokémon that spawns from the Pokémon Discord Bot, Pokécord. Also has a Pokémon name guessing game."
        tech="JavaScript, Node.js"
      />
    </div>
  );
};

export default Projects;
