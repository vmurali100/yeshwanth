import React, { Component } from "react";

const HocComponent = (ActualComponent) => {
  class Common extends Component {
    constructor(props) {
      super(props);

      this.state = {
        clickCount: 0,
      };
    }
    handleclickCount = () => {
      this.setState({ clickCount: this.state.clickCount + 1 });
    };
    render() {
      return (
        <ActualComponent
          clickCount={this.state.clickCount}
          handleCount={this.handleclickCount}
        />
      );
    }
  }

  return Common;
};

export default HocComponent;
