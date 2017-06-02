import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home';
import GrillList from './pages/GrillList/GrillList';
import GrillDetail from './pages/GrillDetail/GrillDetail';

import './App.css';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/grills" component={GrillList} />
          <Route exact path="/grills/:grillId" component={GrillDetail} />
        </Layout>
      </Router>
    );
  }

}

export default App;
