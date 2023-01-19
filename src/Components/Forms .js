import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      comments: "",
      select: "Vue",
    };
  }

  onChangeInputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  onChangeCommentHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  onChangeSelectHandler = (event) => {
    this.setState({
      select: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(`${this.state.input} ${this.state.comments} ${this.state.select} `);
    event.preventDefault();
  };

  render() {
    const { input, comments, select } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Input</label>
          <input
            type="text"
            value={input}
            onChange={this.onChangeInputHandler}
          />
        </div>
        <div>
          <label>Comments</label>

          <textarea
            input="text"
            value={comments}
            onChange={this.onChangeCommentHandler}
          ></textarea>
        </div>
        <div>
          <label>select</label>
          <select value={select} onChange={this.onChangeSelectHandler}>
            <option input="text" value="React">
              React
            </option>
            <option input="text" value="Angular">
              Angular
            </option>
            <option input="text" value="Vue">
              Vue
            </option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Forms;
