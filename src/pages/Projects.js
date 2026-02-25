import React, { useEffect } from "react";
import "./Projects.css";

import Project from "../components/Project";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="content">
      <h1 style={{ paddingTop: "70px", paddingBottom: "10px" }}>some projects</h1>
      <Project
        image={require("../assets/images/tradingbot.png")}
        title="news sentiment trading bot"
        year="05/2024"
        github="https://github.com/nicoella/news-sentiment-trading-bot"
        description="a trading bot utilizing sentiment analysis on webcrawled news article to predict stock price movements. backtested over a 4 year period with a 85.7% win rate."
        tech="python, beautifulsoup, selenium, finbert, backtrader"
      />
      <Project
        image={require("../assets/images/harbour.png")}
        title="harbour"
        year="08/2023"
        github="https://github.com/nicoella/harbour"
        link="https://devpost.com/software/harbour-6olabv"
        description="a highly-scalable language learning conversational bot with diverse personalities made with llms and prompt design and engineering. offers speaking, listening, reading, translations, and gamification."
        tech="next.js, react, typeScript, openai langchain, vercel ai sdk, google cloud api"
      />
      <Project
        image={require("../assets/images/routeoptimizer.png")}
        title="route optimizer"
        year="08/2023"
        github="https://github.com/nicoella/Route-Optimizer"
        description="shortest path calculator for multi-location destinations (ex. chain stores) with a modified held-karp dynamic programming algorithm (travelling salesman problem). handles up to 20 locations 99.99% faster."
        tech="c++, boost.beast, cmake, vue.js, google cloud api"
      />
      <Project
        image={require("../assets/images/siteupdatenotifier.png")}
        title="site update notifier"
        year="07/2023"
        github="https://github.com/nicoella/Site-Update-Notifier"
        link="https://site-update-notifier-frontend.nicolehan1.repl.co/"
        description="a bot that stores sites to track in a database, routinely scans the tracked sites for updates, and pushes a notification to the webhook if an update exists."
        tech="react, python, django, mongodb"
      />
      <Project
        image={require("../assets/images/wizardcats.jpg")}
        title="wizard cats"
        year="09/2022"
        github="https://github.com/nicoella/wizard-cats"
        link="https://wizard-cats.nicolehan1.repl.co"
        description="real-time 1v1 shooter with a custom shape-detection algorithm for shapes drawn by the player’s mouse, support for gameplay across distributed systems, and a database supporting a user login system and game statistics storage. all art is custom drawn."
        tech="java springboot, mysql, firebase, phaser, javascript, html, css, aseprite"
      />
      <Project
        image={require("../assets/images/growthmodel.png")}
        title="population growth model"
        year="01/2022"
        github="https://github.com/nicoella/Population-Growth-Model"
        description="a mathematical model to simulate and compare natural and population growth models."
        tech="java, processing"
      />
      <Project
        image={require("../assets/images/ontrack.png")}
        title="ontrack"
        year="08/2021"
        github="https://github.com/nicoella/OnTrack"
        description="a website to connect patients with their dietician and help make a healthy eating plan and keep track of goals."
        tech="html, css, php, mysql"
      />
      <Project
        image={require("../assets/images/birthdaybash.png")}
        title="covid birthday bash"
        year="06/2020"
        github="https://github.com/nicoella/Covid-Birthday-Bash"
        description="an interactive video game about staying safe during the pandemic at a birthday party. all art is custom drawn."
        tech="java, aseprite"
      />
      <Project
        image={require("../assets/images/pokemon.png")}
        title="pokémon discord bot"
        year="05/2020"
        github="https://github.com/nicoella/Pokemon-Bot"
        description="a discord bot to detect any pokémon that spawns from the pokémon discord bot, pokécord. also has a pokémon name guessing game."
        tech="javascript, node.js"
      />
    </div>
  );
};

export default Projects;
