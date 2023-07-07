import React from "react";
import "./TimelineItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faArrowUpRightFromSquare);

class TimelineItem extends React.Component {
  render() {
    let description = <></>;
    if (this.props.description) {
      description = <p>{this.props.description}</p>;
    }
    let extra = <></>;
    if (this.props.extra) {
      extra = <p class="extra">{this.props.extra}</p>;
    }
    let github = <></>;
    if (this.props.github) {
      github = (
        <a href={this.props.github} target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      );
    }
    let link = <></>;
    if (this.props.link) {
      link = (
        <a href={this.props.link} target="_blank">
          <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />
        </a>
      );
    }
    return (
      <div class="item">
        <div class="time">
          <p>{this.props.year}</p>
        </div>
        <div class="description">
          <div class="title">
            <h3>{this.props.title}</h3>
            {github}
            {link}
          </div>
          {description}
          {extra}
        </div>
      </div>
    );
  }
}

export default TimelineItem;
