import React, { Component } from "react";

export default class HoveredCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onMouseOver={this.handleCount}>Hovered {count} times</h1>
      </div>
    );
  }
}
