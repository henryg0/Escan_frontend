import React from 'react';

class Major extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <option value={this.props.major}></option>
  }
}

export default Major;