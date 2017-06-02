import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {

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
      <Jumbotron>
        <h1>Welcome to Uberbecue!</h1>
        <p>There are <strong>{ grills.length }</strong> Grills in our database.</p>
        <p><Link to="/grills" className="btn btn-primary">To the grills!</Link></p>
      </Jumbotron>
    );
  }
}

export default Home;
