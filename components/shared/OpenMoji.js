import React, { Component } from "react";
import SVG from "react-inlinesvg";

class OpenMoji extends Component {
  render() {
    return <span>{this.props.label}</span>;
  }
}

export default OpenMoji;
