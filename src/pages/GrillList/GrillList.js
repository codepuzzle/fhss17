import React, { Component } from 'react';

import TableOfGrills from '../../components/TableOfGrills/TableOfGrills';

class GrillList extends Component {

  constructor(props) {
    super(props);
    this.state = { grills: [] };
    this.loadGrills = this.loadGrills.bind(this);
  }

  componentWillMount() {
    this.loadGrills();
  }

  loadGrills() {
    fetch('http://localhost:3000/api/grills/')
      .then((response) => response.json())
      .then((data) => this.setState({ grills:data }));
  }

  render() {
    const { grills } = this.state;

    return (
      <div>
        <h1>Available Grills</h1>
        <TableOfGrills grills={ grills } />
      </div>
    );
  }
}

export default GrillList;
