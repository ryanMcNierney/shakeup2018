import React from 'react'
import { Link } from 'react-router-dom'
import standingsLogo from './styles/images/standings.png'
import top6 from './styles/images/top6.png'
import matchups from './styles/images/matchups.png'
import nflLogo from './styles/images/nflLogo.png'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="App-header">
      <div id="nav-title">
        <img id="nav-icon" src={nflLogo} alt="nfl" />
        <h1 className="App-title">The Shake Up</h1>
      </div>
      <div id="nav-links">
        <Link to='/standings'>
          <div>
            <img id="nav-icon" src={standingsLogo} alt="standings" />
            <span>Standings</span>
          </div>
        </Link>
        <Link to='/top6'>
          <div>
            <img id="nav-icon" src={top6} alt="top6" />
            <span>Top 6</span>
          </div>
        </Link>
        <Link to='/matchups'>
          <div>
            <img id="nav-icon" src={matchups} alt="matchups" />
            <span>Matchups</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
