import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import { connect } from 'react-redux';

import store from '../../store';

class Home extends Component {

  constructor(props) {
    super(props);
    this.loadGrills = this.loadGrills.bind(this);
  }

  componentWillMount() {
    this.loadGrills();
  }

  loadGrills() {
    fetch('http://localhost:3000/api/grills/')
      .then((response) => response.json())
      .then((data) => setTimeout(() => store.dispatch({
        type: 'GRILLS_LOADED',
        data: data
      }), 500));
  }

  render() {
    const { grills } = this.props;

    return (
      <Jumbotron>
        <h1>Welcome to Uberbecue!</h1>
        <p>There are <strong>{ grills.length }</strong> Grills in our database.</p>
        <p><Link to="/grills" className="btn btn-primary">To the grills!</Link></p>
      </Jumbotron>
    );
  }
}

const mapStateToProps = (store) => ({
  grills: store.grills
});

export default connect(mapStateToProps)(Home);
