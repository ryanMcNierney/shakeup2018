import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import StandingsTable from './standings/StandingsTable'
import Top6Grid from './top6/Top6Grid'
import Loading from './Loading'
import { standingsFetch } from '../reducers/standingsReducer'
import { top6Fetch } from '../reducers/top6Reducer'

// wire up routes here

class App extends Component {
  async componentDidMount() {
    await this.props.getStandings()
    await this.props.getTop6()

  }

  render() {
    const { standings, top6, standingsLoading, top6Loading } = this.props
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          {
            (standingsLoading === true || top6Loading === true) ? <Loading /> :
              <div id="content">
                <Route path='/standings' render={() => <StandingsTable standings={standings} />} />
                <Route path='/top6' render={() => <Top6Grid top6={top6} />} />
                <Route exact path='/' render={() => <StandingsTable standings={standings} />} />
              </div>
          }
        </div>
      </HashRouter>
    );
  }
}

const mapState = state => {
  return {
    standings: state.standings.standings,
    standingsLoading: state.standings.loading,
    top6: state.top6.top6,
    top6Loading: state.top6.loading
  }
}

const mapProps = dispatch => {
  return {
    getStandings: () => dispatch(standingsFetch()),
    getTop6: () => dispatch(top6Fetch())
  }
}

export default connect(mapState, mapProps)(App);
