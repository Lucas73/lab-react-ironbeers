import React, { Component } from 'react';
import { Switch, Redirect, Route} from 'react-router-dom'

import'font-awesome/css/font-awesome.min.css'
import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/misc/Header';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import Beer from './components/Beer';

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="container">
            <Switch>
              <Route exact path="/" component = { Home } />
              <Route exact path="/all-beers" component = { AllBeers } />
              <Route exact path={`/beer/${this.props._id}`} component = { Beer } />
              {/* <Route exact path="/random-beer" component = { < Allbeers />} />
              <Route exact path="/new-beer" component = { < Allbeers />} /> */}
            </Switch>
          </div>
      </div>
    );
  }
}

const getBeerId = (element) => {
  return element;
}

export default App;
