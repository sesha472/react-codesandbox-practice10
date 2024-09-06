import React, { Component } from "react";

class Practice10 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrimnetHandler = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("statechnages :" + this.state.count);
    });
  };
  render() {
    return (
      <div>
        This is class componnet
        <h1>{this.state.count}</h1>
        <button onClick={this.incrimnetHandler}>incriment </button>
      </div>
    );
  }
}
export default Practice10;
