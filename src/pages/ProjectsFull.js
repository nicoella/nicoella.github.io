import React, { useEffect } from "react";
import "./ProjectsFull.css";

import TimelineItem from "../components/TimelineItem";

import projects from "../assets/data/projects.json";

const ProjectsFull = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="projects-full">
      <h1>Project Archive</h1>
      <p class="intro">This is a chronological list of my projects.</p>
      {projects.map((project, index) => (
        <TimelineItem
          key={index}
          year={project.year}
          title={project.title}
          github={project.github}
          link={project.link}
          description={project.description}
          extra={project.extra}
        />
      ))}
    </div>
  );
};

export default ProjectsFull;
