import React from 'react'
import Sound from 'react-sound';

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class CarAlarm extends React.Component {
    constructor(props) {
        super(props) 
        
        // this.state = {
        //     style : {
        //     },
        // }
    }

    // alarmSounds = () => {
    //     this.setState({    
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <div id="car" >
                    <div className="componentDisplay" >
                        {/* <img src="./images/car.jpeg" alt="Old car"/> */}
                    </div>
                    <Sound 
                        url="/sounds/carAlarm.wav"
                        playStatus={Sound.status.PLAYING}
                    /> 
                </div>
            </React.Fragment>
        )
     }
}


export default CarAlarm