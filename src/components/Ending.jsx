import React from 'react';

class Ending extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Submission Status: {this.props.ending}</h1>
      </div>
    )
  }
}

export default Ending;