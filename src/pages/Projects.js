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
        image={require("../assets/images/harbour.png")}
        title="Harbour"
        year="08/2023"
        github="https://github.com/nicoella/harbour"
        link="https://devpost.com/software/harbour-6olabv"
        description="A highly-scalable language learning conversational bot with diverse personalities made with LLMs and prompt design and engineering. Offers speaking, listening, reading, translations, and gamification."
        tech="Next.js, React, TypeScript, OpenAI LangChain, Vercel AI SDK, Google Cloud API"
      />
      <Project
        image={require("../assets/images/routeoptimizer.png")}
        title="Route Optimizer"
        year="08/2023"
        github="https://github.com/nicoella/Route-Optimizer"
        description="Shortest path calculator for multi-location destinations (ex. chain stores) with a modified Held-Karp dynamic programming algorithm (Travelling Salesman Problem). Handles up to 20 locations 99.99% faster."
        tech="C++, Boost.Beast, CMake, Vue.js, Google Cloud API"
      />
      <Project
        image={require("../assets/images/siteupdatenotifier.png")}
        title="Site Update Notifier"
        year="07/2023"
        github="https://github.com/nicoella/Site-Update-Notifier"
        link="https://site-update-notifier-frontend.nicolehan1.repl.co/"
        description="A bot that stores sites to track in a database, routinely scans the tracked sites for updates, and pushes a notification to the webhook if an update exists."
        tech="React, Python, Django, MongoDB"
      />
      <Project
        image={require("../assets/images/wizardcats.jpg")}
        title="Wizard Cats"
        year="09/2022"
        github="https://github.com/nicoella/wizard-cats"
        link="https://wizard-cats.nicolehan1.repl.co"
        description="Real-time 1v1 shooter with a custom shape-detection algorithm for shapes drawn by the player’s mouse, support for gameplay across distributed systems, and a database supporting a user login system and game statistics storage. All art is custom drawn."
        tech="Java Springboot, MySQL, Firebase, Phaser, JavaScript, HTML, CSS, Aseprite"
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
