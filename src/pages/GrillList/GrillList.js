import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableOfGrills from '../../components/TableOfGrills/TableOfGrills';

class GrillList extends Component {

  render() {
    const { grills } = this.props;

    return (
      <div>
        <h1>Available Grills</h1>
        <TableOfGrills grills={ grills } />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  grills: store.grills
});

export default connect(mapStateToProps)(GrillList);
