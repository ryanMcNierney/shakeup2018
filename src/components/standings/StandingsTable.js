import React from 'react'
import '../styles/StandingsTable.css'

const StandingsTable = (props) => {
  return (
    <div id="standings-table">
      <div id="standings-title">
        <h1>Standings</h1>
      </div>
      <table>
        <thead>
          <tr id="table-row">
            <th id="table-head">Rank</th>
            <th id="table-head">Team</th>
            <th id="table-head">Record</th>
            <th id="table-head">Top 6</th>
            <th id="table-head">Pts For</th>
            <th id="table-head">Pts Agst</th>
          </tr>
        </thead>
        <tbody>
          {
            props.standings.map(team => {
              return (
                <tr key={team.teamIdx} id="table-row">
                  <td>{team.rank}</td>
                  <td id="team-name"><img alt="team-icon" id="table-icon" src={team.img} /><div>{team.team}</div></td>
                  <td>{team.record}</td>
                  <td>{team.top6}</td>
                  <td>{team.ptsFor}</td>
                  <td>{team.ptsAgst}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StandingsTable
