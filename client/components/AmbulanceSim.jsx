import React from 'react'
import Siren from './Siren'

const blueAndRed = ["blue", "red"]

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class AmbulanceSim extends React.Component {
   constructor(props) {
    super(props) 

    this.state = {
      style : {
        backgroundColor: 'blue',
      }, 
    }
  }

    addRaindbow = () => {
        setInterval(() =>{
            this.setState({
                style : {
                    backgroundColor: randomHexColor(),
                }
            })
        }, 800)
    }

    render(){
        return (
            <React.Fragment>
                <div id="policeCar">
                    <Siren position="sirenLeft"/> 
                    <Siren position="sirenRight"/> 

                    <div className="rainbowSiren" style={this.state.style} onMouseOver={this.addRaindbow} ></div>
                </div>
            </React.Fragment>
        )
    }

}

export default AmbulanceSim