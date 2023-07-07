import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div class="projects">
      <h1>Project Showcase</h1>
      <p>
        A full list of my projects can be found{" "}
        <Link to="/projectsFull"> here</Link>.{" "}
      </p>
    </div>
  );
};

export default Projects;
