import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./Project.css";

library.add(faGithub);

class Project extends React.Component {
  render() {
    return (
      <div class="project">
        <img class="image" src={this.props.image} />
        <div class="description">
          <div class="title">
            <h3>{this.props.title}</h3>
            <a href={this.props.github} target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
          <p>{this.props.year}</p>
          <p>{this.props.description}</p>
          <p class="tech">{this.props.tech}</p>
        </div>
      </div>
    );
  }
}

export default Project;
