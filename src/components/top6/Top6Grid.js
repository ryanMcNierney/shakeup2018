import React, { Component } from 'react'
import { connect } from 'react-redux'
import { top6Fetch } from '../../reducers/top6Reducer'
import Loading from '../Loading'
import '../styles/top6.css'

class Top6Grid extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick() {
    await this.props.getTop6()
  }

  render() {
    const { top6, top6Loading } = this.props

    return (
      <div id="top6-content">
        {
          (top6Loading === true) ? <Loading /> :
            <React.Fragment>
              <div id="top6-top">
                <div id="top6-title">
                  <h1>Top 6</h1>
                </div>
                <div id="refresh">
                  <button id="refresh" onClick={this.handleClick}>Refresh Data</button>
                </div>
              </div>
              <div id="top6-grid">
                <table>
                  <thead>
                    <tr id="top6-row">
                      <th id="top6-head">Rank</th>
                      <th id="top6-head">Team</th>
                      <th id="top6-head">Proj</th>
                      <th id="top6-head">Actual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      top6.map(team => {
                        return (
                          <tr key={team.teamIdx} id="top6-row">
                            <td>{team.rank}</td>
                            <td id="team-name"><img alt="team-icon" id="table-icon" src={team.img} /><span>{team.team}</span></td>
                            <td>{team.projected}</td>
                            <td>{team.actual}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </React.Fragment>
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    top6Store: state.top6.top6,
    top6Loading: state.top6.loading
  }
}

const mapProps = dispatch => {
  return {
    getTop6: () => dispatch(top6Fetch())
  }
}

export default connect(mapState, mapProps)(Top6Grid)
