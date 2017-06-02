import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

class Layout extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>Uberbercue</h2>
        </div>

        <div>
          { this.props.children }
        </div>

      </div>
    );
  }

}

export default Layout;
