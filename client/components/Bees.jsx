import React from 'react'

const randomDegrees = () =>
    `${Math.floor(Math.random() * 360)}`

const randomX = () =>
    `${Math.floor(Math.random() * 100)+300}`

const randomY = () =>
    `${Math.floor(Math.random() * 100)+300}`

 

class Bees extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                width: "5%",
                // transform: ''
                transform: `translateX(${randomX()}px) translateY(${randomY()}px)`
            }
            
        }
        this.moveBee = this.moveBee.bind(this)
    }
    

    moveBee = (e) => {
        this.setState({
            style: {
                width: "5%",
                transform: `translateX(${e.nativeEvent.offsetX}px) translateY(${e.nativeEvent.offsetY}px)`
            }
        })
    }


    render() {
        return (
            <div id="bees" className="componentDisplay" onMouseMove={this.moveBee}>

                <img className="beeImg" src="./images/bee.png" style={this.state.style}/>

            </div>
        )
    }
}

export default Bees
