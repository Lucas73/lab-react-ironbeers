import React, { Component } from 'react';
import { Switch, Redirect, Route} from 'react-router-dom'

import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/misc/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

          <div className="container">
            <Switch>
              <Route exact path="/" component = { Home } />
              {/* <Route exact path="/all-beers" component = { < Allbeers />} />
              <Route exact path="/random-beer" component = { < Allbeers />} />
              <Route exact path="/new-beer" component = { < Allbeers />} /> */}
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
