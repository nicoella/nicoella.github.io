import React from "react";
import "./ProjectsFull.css";

import TimelineItem from "../components/TimelineItem";

const ProjectsFull = () => {
  return (
    <div class="projects-full">
      <h1>Project Archive</h1>
      <p class="intro">This is a chronological list of my projects.</p>
      <TimelineItem
        year="2023"
        title="Portfolio Website"
        github="https://github.com/nicoella/nicoella.github.io"
        description="This portfolio site."
        extra="React, JavaScript, HTML, CSS"
      />
      <TimelineItem
        year="2023"
        title="Tic-Tac-Toe"
        github="https://github.com/nicoella/tictactoe"
        description="Tic-Tac-Toe command-line game."
        extra="Bash"
      />
      <TimelineItem
        year="2022"
        title="Wizard Cats"
        github="https://github.com/nicoella/wizard-cats"
        description="An online real-time 1 vs 1 shooter with an algorithm to detect spell drawing."
        extra="Firebase, Phaser, JavaScript, HTML, CSS, Aseprite"
      />
      <TimelineItem
        year="2022"
        title="Population Growth Model"
        github="https://github.com/nicoella/Population-Growth-Model"
        description="A mathematical model to simulate and compare natural and population growth models."
        extra="Java, Processing"
      />
      <TimelineItem
        year="2021"
        title="OnTrack"
        github="https://github.com/nicoella/OnTrack"
        link="http://ontrackdemo.000webhostapp.com/"
        description="A website to connect patients with their dietician and help make a healthy eating plan and keep track of goals."
        extra="HTML, CSS, PHP, MySQL"
      />
      <TimelineItem
        year="2020"
        title="Pokémon Bot"
        github="https://github.com/nicoella/Pokemon-Bot"
        description="A Discord bot to detect any Pokémon that spawns from the Pokémon Discord Bot, Pokécord. Also has a Pokémon name guessing game."
        extra="JavaScript, Node.js"
      />
      <TimelineItem
        year="2020"
        title="Urban Sprawl Animation"
        github="https://github.com/nicoella/My-Creation"
        description="A short animation on how urban sprawl affects forest animals."
        extra="Java"
      />
      <TimelineItem
        year="2020"
        title="Connect 4"
        github="https://github.com/nicoella/Connect-4"
        description="A recreation of the game Connect 4."
        extra="Java"
      />
      <TimelineItem
        year="2020"
        title="Concentration"
        github="https://github.com/nicoella/Concentration"
        description="A recreation of the game Concentration."
        extra="Java, Processing"
      />
      <TimelineItem
        year="2020"
        title="Covid Grocery Run"
        github="https://github.com/nicoella/Covid-Birthday-Bash"
        link="https://devpost.com/software/grocery-run-covid-19-edition"
        description="An interactive video game about staying safe during the pandemic at a birthday party."
        extra="Java"
      />
      <TimelineItem
        year="2020"
        title="If Only"
        github="https://github.com/nicoella/tictactoe"
        description="A short game about the impact of decisions."
        extra="Java"
      />
      <TimelineItem
        year="2019"
        title="Snake Game"
        github="https://github.com/nicoella/Snake-Game"
        description="Recreation of the game Snake."
        extra="Java, Processing"
      />
      <TimelineItem
        year="2019"
        title="Processing Projects"
        github="https://github.com/nicoella/Processing-Projects"
        description="Processing projects and interactive animations."
        extra="Java, Processing"
      />
      <TimelineItem
        year="2019"
        title="Animated Halloween Card"
        github="https://github.com/nicoella/Halloween-Card"
        description="An animated Halloween card. Animation components drawn using Processing draw tools."
        extra="Java, Processing"
      />
    </div>
  );
};

export default ProjectsFull;
