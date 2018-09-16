import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import StandingsContainer from './standings/StandingsContainer'
import Top6Container from './top6/Top6Container';

// wire up routes here

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <div id="content">
            <Route path='/standings' component={StandingsContainer} />
            <Route path='/top6' component={Top6Container} />
            <Route exact path='/' component={StandingsContainer} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
