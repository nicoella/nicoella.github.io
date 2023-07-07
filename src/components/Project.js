import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./Project.css";

library.add(faGithub, faArrowUpRightFromSquare);

class Project extends React.Component {
  render() {
    let link = <></>;
    if (this.props.link) {
      link = (
        <a href={this.props.link} target="_blank">
          <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />
        </a>
      );
    }
    return (
      <div class="project">
        <img class="image" src={this.props.image} />
        <div class="description">
          <div class="title">
            <h3>{this.props.title}</h3>
            <a href={this.props.github} target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            {link}
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
