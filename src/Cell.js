import React, { Component } from 'react';

export default class Cell extends Component {

  setColor = (e) => {
    e.target.style.backgroundColor = this.props.selectedColor
  }

  render() {
    return (
      <div
      className="cell"
      style={{backgroundColor: this.props.color}}
      onClick={this.setColor}
      >
      </div>
    )
  }

}
