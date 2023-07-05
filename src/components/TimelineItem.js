import React from "react";
import styles from "./TimelineItem.css";

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
    return (
      <div class="item">
        <div class="time">
          <p>{this.props.year}</p>
        </div>
        <div class="description">
          <h3>{this.props.title}</h3>
          {description}
          {extra}
        </div>
      </div>
    );
  }
}

export default TimelineItem;
