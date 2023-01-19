import React, { Component } from "react";
export class Problem2State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ganesh",
      age: 1    ,
      array: [1, 2, 3, 4, 5, 6],
    };
  }
  changeState = () => {
    this.setState({ age: this.state.age * 2,name:"Dinesh" });
  };
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        {this.state.array.map((arr) => {
          return <h1 style={{ display: "inline", padding: 10 }}>{arr * 2}</h1>;
        })}
        <button onClick={this.changeState}>changeState</button>
      </>
    );
  }
}

export default Problem2State;
