import React from 'react'


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


    // activateLasers = () => {

    // }

    render() {
        return (
         <div id="car" >
             <div className="componentDisplay" >
                <img src="./images/car.jpeg" alt="Old car"/>
                {/* <audio onplay="alarmSound()">...</audio> */}
            </div>
            {/* <button onClick={alarmSound}>Make Sounds</button> */}
            {/* <button onClick={activateLasers}>Activate Lasers</button> */}
         </div>
        )
     }
}


export default CarAlarm