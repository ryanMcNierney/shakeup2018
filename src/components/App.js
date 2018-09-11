import React, { Component } from 'react'
import Navbar from './Navbar'
import StandingsContainer from './standings/StandingsContainer'

// wire up routes here

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="content">
          <h1>Content</h1>
          <StandingsContainer />
        </div>
      </div>
    );
  }
}

export default App;
