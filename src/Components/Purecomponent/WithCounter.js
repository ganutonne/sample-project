import React, { Component } from "react";
const UpdatedComponent = (OriginalComponent) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleChange = () => {
      this.setState((prevCount) => {
        return { count: prevCount.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          name="Ganesh"
          count={this.state.count}
          handleChange={this.handleChange}
        />
      );
    }
  }
  return NewComp;
};

export default UpdatedComponent;
