import React, { Component } from "react";

export default class SelectCity extends Component {
  render() {
    console.log("cities" + this.props.cities);

    return <div>{this.props.cities}</div>;
  }
}
