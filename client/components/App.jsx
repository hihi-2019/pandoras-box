import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AmbulanceSim from './AmbulanceSim'
import CarAlarm from './CarAlarm'
import Seizure from './Seizure'
import Spiders from './Spiders'

const App = () => {
  return (
    <Router>
      <div>
      <h1>Pandora's Box</h1>
      </div>
      <div>
        <button>Ambulance</button>
        <button>Car Alarm</button>
        <button>Seizure</button>
        <button>Spiders</button>
      </div>
      <div class="container">
        <Route exact path="/ambulance" component={AmbulanceSim}/>
        <Route exact path="/car" component={CarAlarm}/>
        <Route exact path="/seizure" component={Seizure}/>
        <Route exact path="/spiders" component={Spiders}/>

      </div>
    </Router>
  )
}

export default App
