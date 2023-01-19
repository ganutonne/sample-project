import React, { Component } from "react";
import UpdatedComponent from "../WIthCounter";

class Counter1 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>count={count}</h1>
      </div>
    );
  }
}

export default UpdatedComponent(Counter1);
