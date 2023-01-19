import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class HoverCounter extends Component {
  render() {
    return (
      <>
        <h1 onMouseOver={this.props.handleChange}>
          {this.props.name} Count:={this.props.count}
        </h1>
      </>
    );
  }
}

export default UpdatedComponent(HoverCounter);
