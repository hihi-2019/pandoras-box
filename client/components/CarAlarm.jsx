import React from 'react'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

// const flashBackground = () => setInterval(()=> flash(), 100)


const carAlarm = ["Party!!!", "wahoo!!!", "Rave to the grave!"]

class Seizure extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            style : {
                backgroundColor: 'black',
                width: 'vw',
                height: 'vh',
            },
            party: ''
        }
        this.flash = this.flash.bind(this)

    }
    
  
    flash = () => {
        setInterval(() =>{
            this.setState({
                style : {
                    backgroundColor: randomHexColor(),
                }
            })
        }, 1000)
    }


    render() {
       return (
        <div id="car" className="componentDisplay" style={this.state.style} >
            <div className="carDiv" onMouseOver={this.partyTime}>
                <img src="./images/car.jpeg" alt="Shitty car"/>
            </div>
        </div>

       )
    }
}


export default carAlarm