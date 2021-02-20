import './App.css';
import React, {useState, Component} from 'react';

class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className="heading">{this.props.heading} {(this.props.name.length != 0 && this.props.showName) ? this.props.name + '!' : '' } {this.props.welcome}</h1>
  }
}

export default Heading;