import React from 'react'
import '../styles/StandingsTable.css'

const StandingsTable = (props) => {
  return (
    <div id="standings-table">
      <table>
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Record</th>
            <th>Top 6</th>
            <th>Pts For</th>
            <th>Pts Agst</th>
          </tr>
          {
            props.standings.map(team => {
              return (
                <tr key={team.teamIdx}>
                  <td>{team.rank}</td>
                  <td>{team.team} <img alt="team-icon" id="table-icon" src={team.img} /></td>
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
