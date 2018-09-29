import React from 'react'
import '../styles/top6.css'

const Top6Grid = (props) => {
  const { top6 } = props
  return (
    <div id="top6-content">
      <div id="top6-title">
        <h1>Top 6</h1>
      </div>
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
  )
}

export default Top6Grid
