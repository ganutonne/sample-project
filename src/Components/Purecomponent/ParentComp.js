import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ParentComp extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.handleChange}>
          {this.props.name} Count={this.props.count}
        </button>
      </>
    );
  }
}

export default UpdatedComponent(ParentComp);
