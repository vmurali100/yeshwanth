import React, { Component } from "react";
import HocComponent from "./HocComponent";

class ClickCounter extends Component {
  render() {
    console.log(this.props);
    const { clickCount } = this.props;
    return (
      <div>
        <button onClick={this.props.handleCount}>
          Clicked {clickCount} times
        </button>
      </div>
    );
  }
}

export default HocComponent(ClickCounter);
