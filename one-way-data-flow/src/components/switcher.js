import React, { Component } from "react";

export default class Switcher extends Component {
  constructor(props) {
    super(props);
    this._onButtonCLick = e => {
      this.props.onChange(!this.props.value);
    };
  }

  render() {
    return (
      <button onClick={this._onButtonCLick}>
        {this.props.value ? "Lights on" : "Lights off"}
      </button>
    );
  }
}
