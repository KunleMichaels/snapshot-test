import React from "react";

const STATUS = {
  DISABLED: "disabled",
  NORMAL: "normal",
};

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      class: STATUS.NORMAL,
    };
  }
  _onClick = () => {
    this.setState({ class: STATUS.DISABLED ? STATUS.NORMAL : STATUS.DISABLED });
  };
  _onMouseLeave = () => {
    this.setState({ class: STATUS.NORMAL });
  };
  render() {
    return (
      <button
        className={this.state.class}
        onClick={this._onClick}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </button>
    );
  }
}
