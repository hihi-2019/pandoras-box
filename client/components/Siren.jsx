import React from 'react'

const blueAndRed = ["blue", "red"]

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Siren extends React.Component {
   constructor(props) {
    super(props) 

    this.state = {
      style : {
        backgroundColor: 'blue',
        width: "80px",
        height: "10px",
        // borderRadius: "50%"
      }, 
    }
  }


    addBlueAndRed = () => {
        setInterval(() =>{
            this.setState({
                style : {
                    // backgroundColor: 'red',
                backgroundColor: blueAndRed[Math.floor(Math.random()*blueAndRed.length)],
                    width: "80px",
                    height: "10px",
                }
            })
        }, 800)
    }

render(){
        return (
            <React.Fragment>
            
                <div className={this.props.position} style={this.state.style} onMouseOver={this.addBlueAndRed} ></div>

            </React.Fragment>
        )
    }

}

export default Siren