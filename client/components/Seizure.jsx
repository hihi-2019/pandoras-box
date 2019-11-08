import React from 'react'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

// const flashBackground = () => setInterval(()=> flash(), 100)


const partyArray = ["Party!!!", "Wahoo!!!", "Rave to the grave!", "Party at Robs House!"]

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
        this.partyTime = this.partyTime.bind(this)
        console.log("party Array:",partyArray)
        console.log('this.state:', this.state)


    }
    
  
    flash = () => {
        setInterval(() =>{
            this.setState({
                style : {
                    backgroundColor: randomHexColor(),
                }
            })
        }, 100)
    }
   
    partyTime = () => {
        setInterval(() =>{
            this.setState({
                party: partyArray[Math.floor(Math.random()*partyArray.length)]
            })
        }, 2000)

    }

    render() {
       return (
        <div className="componentDisplay" style={this.state.style} onMouseOver={this.flash}>
            <div className="party" onMouseOver={this.partyTime}>
                <h1 >{this.state.party}</h1>
            </div>
        </div>

       )
    }
}


export default Seizure