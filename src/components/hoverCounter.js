import React, { Component } from "react";

export class hoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((previousState) => {
      return { count: previousState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2 onMouseOver={this.incrementCount}> Hover {count} times </h2>
      </div>
    );
  }
}

export default hoverCounter;
