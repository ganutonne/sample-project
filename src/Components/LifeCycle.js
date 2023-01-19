import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messaage: "ganesh",
    };
    console.log("lifeCycle A Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifeCycle A componentDidMount");
  }

  render() {
    console.log("lifeCycleA From RenderMethod "); //Render function is a pure function
    return <div>LifeCycleA</div>;
  }
}

export default LifeCycle;
