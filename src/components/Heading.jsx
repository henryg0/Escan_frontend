import './App.css';
import React, {useState, Component} from 'react';

class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <h1 className="heading">{this.props.heading} {(this.props.name.length != 0 && this.props.showName) ? this.props.name + '!' : '' } {this.props.welcome}</h1>
      <p>(Fill out this form to get a E-Week 2021 Prize Box raffle entry!)</p>
      </div>
    )}
}

export default Heading;