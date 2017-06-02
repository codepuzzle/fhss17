import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

class TableOfGrills extends Component {

  static defaultProps = {
    grills: []
  };

  render() {
    const { grills } = this.props;

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          { grills.map((grill) => (
            <tr key={ grill.id }>
              <td>{ grill.id }</td>
              <td>{ grill.name }</td>
              <td>{ grill.location.lat }, { grill.location.lng }</td>
              <td><Link to={ `/grills/${grill.id}` } className="btn btn-info">Show</Link></td>
            </tr>
          )) }
        </tbody>
      </Table>
    );
  }
}

export default TableOfGrills;
