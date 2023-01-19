import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <Child count={this.state.count} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Parent;
