import React, { Component } from 'react';

class DetailOfGrill extends Component {

  render() {
    const { grill } = this.props;

    return (
      <div>
        <h2>Name { grill.name }</h2>
        <p>Location { grill.location.lat }, { grill.location.lng }</p>
      </div>
    );
  }
}

export default DetailOfGrill;
