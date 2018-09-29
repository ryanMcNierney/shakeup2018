import React, { Component } from 'react'
import { connect } from 'react-redux'
import { top6Fetch } from '../../reducers/top6Reducer'
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
    const { top6 } = this.props
    return (
      <div id="top6-content">
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
                      <td id="team-name">
                        <div>
                          <img alt="team-icon" id="table-icon" src={team.img} />
                        </div>
                        <div>{team.team}</div>
                      </td>
                      <td>{team.projected}</td>
                      <td>{team.actual}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapProps = dispatch => {
  return {
    getTop6: () => dispatch(top6Fetch())
  }
}

export default connect(null, mapProps)(Top6Grid)
