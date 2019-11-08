import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import AmbulanceSim from './AmbulanceSim'
import CarAlarm from './CarAlarm'
import Seizure from './Seizure'
import Spiders from './Spiders'
import CommanderKeen from './CommanderKeen'

const App = () => {
  return (
    <Router>
      <div className="bsdo-div">
        {/* <img src="/icons/bsod.png" style={"display:none;"} className="bsod" /> */}
      </div>
      <div className="main">
        <div className="main-top">
          <div className="shortcuts">
            <div className="shortcut" id="home">
              <a href="#">
                <img src="/icons/my-computer.png" />
                <span>My Computer</span>
              </a>
            </div>
            <div className="shortcut" id="home">
              <a href="#">
                <img src="/icons/recycle-bin.png" />
                Recycle Bin
            </a>
            </div>
            <div className="shortcut" id="home">
              <a href="#">
                <img src="/icons/folder.png" />
                1337 Hax
            </a>
            </div>
            <div className="shortcut" id="home">
              <a href="#">
                <img src="/icons/network-neighborgood.png" />
                Network Neighborhood
            </a>
            </div>
            <div className="shortcut" id="home">
              <Link to="/ambulance">

                <img src="/icons/my-computer.png" />
                <span>My Computer</span>
              </Link>
            </div>
            <div className="shortcut" id="home">
              <Link to="/seizure">
                <img src="/icons/recycle-bin.png" />
                Recycle Bin
            </Link>
            </div>
            <div className="shortcut" id="home">
              <Link to="/car">
                <img src="/icons/folder.png" />
                1337 Hax
            </Link>
            </div>
            <div className="shortcut" id="home">
              <Link to="/spiders">

                <img src="/icons/network-neighborgood.png" />
                Network Neighborhood
            </Link>
            </div>
          </div>
          <div className="frame">
            <div className="frame-top">
              <div className="frame-top-left">
                <img src="/icons/pyramid.png" />
                Pandora's Box
                </div>
              <div className="frame-top-right">
                <button className="window-close">
                  <span>X</span>
                </button>
              </div>
            </div>
            <div className="frame-main">
              <Route exact path="/ambulance" component={AmbulanceSim} />
              <Route exact path="/car" component={CarAlarm} />
              <Route exact path="/seizure" component={Seizure} />
              <Route exact path="/spiders" component={Spiders} />
              <Route exact path="/keen" component={CommanderKeen} />
            </div>
          </div>
        </div>
        <div className="main-bottom">
          <div className="taskbar">
            <div className="taskbar-left">
              <button className="start-button" onclick="picture()">
                <img src="/icons/windows.png" />
                Start
                </button>
            </div>
            <div className="taskbar-middle">
              <button className="active-window">
                <img src="/icons/pyramid.png" />
                <Link to="/">
                Pandora's Box
                </Link>
                </button>
              <button className="inactive-window">
                <img src="/icons/loic.png" />
                Low Orbit Ion Cannon
                </button>

              <button className="inactive-window">
                
                  <img src="/icons/commander-keen.png" />
                  <Link to="/keen" >
                Commander Keen
                </Link>
                </button>

            </div>
            <div className="taskbar-right">

            </div>
          </div>
        </div>
      </div>

    </Router>
  )
}

export default App
