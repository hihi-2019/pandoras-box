import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
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
        <Link to ="/ambulance"><button>Ambulance</button></Link>
        <Link to ="/car"><button>Car Alarm</button></Link>
        <Link to ="/seizure"><button>Seizure</button></Link>
        <Link to ="/spiders"><button>Spiders</button></Link>
      </div>
      <div className="container">
        <Route exact path="/ambulance" component={AmbulanceSim}/>
        <Route exact path="/car" component={CarAlarm}/>
        <Route exact path="/seizure" component={Seizure}/>
        <Route exact path="/spiders" component={Spiders}/>

      </div>
    </Router>
  )
}

export default App
