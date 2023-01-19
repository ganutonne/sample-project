import React, { Component } from "react";
const UpdatedComponent = (OriginalComponent) => {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          name="Ganesh"
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  };
};

export default UpdatedComponent;
