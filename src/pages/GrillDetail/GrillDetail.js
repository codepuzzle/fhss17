import React, { Component } from 'react';

import DetailOfGrill from '../../components/DetailOfGrill/DetailOfGrill';

class GrillDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { grill: null };
    this.loadGrills = this.loadGrills.bind(this);
  }

  componentWillMount() {
    this.loadGrills();
  }

  loadGrills() {
    const { match } = this.props;
    const grillId = match.params.grillId;
    fetch('http://localhost:3000/api/grills/' + grillId)
      .then((response) => response.json())
      .then((data) => this.setState({ grill:data }));
  }

  render() {
    const { grill } = this.state;

    return (
      <div>
        <h1>Grill</h1>
        { grill && <DetailOfGrill grill={ grill } /> }
      </div>
    );
  }
}

export default GrillDetail;
