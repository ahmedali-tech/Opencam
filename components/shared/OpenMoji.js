import React, { Component } from "react";
import SVG from "react-inlinesvg";

class OpenMoji extends Component {
  render() {
    if (this.props.hexcode === "1F6F5") {
      return <span>Bike</span>;
    }
    if (this.props.hexcode === "1F6F5") {
      return <span>Truck</span>;
    }
    if (this.props.hexcode === "1F697") {
      return <span>car</span>;
    }
    if (this.props.hexcode === "1F68C") {
      return <span>Bus</span>;
    }
    if (this.props.hexcode === "1F6B2") {
      return <span>Cycle</span>;
    }
    if (this.props.hexcode === "1F6B2") {
      return <span>Person</span>;
    }
  }
}

export default OpenMoji;
