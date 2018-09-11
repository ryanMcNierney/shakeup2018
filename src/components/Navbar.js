import React from 'react'
import standingsLogo from './styles/images/standings.png'
import top6 from './styles/images/top6.png'
import matchups from './styles/images/matchups.png'
import nflLogo from './styles/images/nflLogo.png'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="App-header">
      <div id="nav-title">
        <img id="nav-icon" src={nflLogo} />
        <h1 className="App-title">The Shake Up</h1>
      </div>
      <div id="nav-links">
        <div selected="true">
          <img id="nav-icon" src={standingsLogo} />
          <span>Standings</span>
        </div>
        <div>
          <img id="nav-icon" src={top6} />
          <span>Top 6</span>
        </div>
        <div>
          <img id="nav-icon" src={matchups} />
          <span>Matchups</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
