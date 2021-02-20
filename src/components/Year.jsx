import React from 'react';

class Year extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <option value={this.props.year}></option>
  }
}

export default Year;