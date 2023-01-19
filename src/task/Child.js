import React, { Component } from "react";

class Child extends Component {
  //   handleClick = ({ count }) => {
  //     this.setState({
  //       count: count + 1,
  //     });
  //   };
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.handleClick}>+</button>
      </div>
    );
  }
}

export default Child;
