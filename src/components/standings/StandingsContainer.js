import React, { Component } from 'react'
import { connect } from 'react-redux'
import { standingsFetch } from '../../reducers/standingsReducer'
import StandingsTable from './StandingsTable'

class StandingsContainer extends Component {

  async componentDidMount() {
    await this.props.getStandings()
  }

  render() {
    const { standings, loading } = this.props
    return (
      <React.Fragment>
        {
          (loading === true) ? <div id="loading"></div> : <StandingsTable standings={standings} />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    standings: state.standings.standings,
    loading: state.standings.loading,
    error: state.standings.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStandings: () => dispatch(standingsFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StandingsContainer)
