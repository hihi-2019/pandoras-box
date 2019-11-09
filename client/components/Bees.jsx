import React from 'react'

const randomDegrees = () =>
    `${Math.floor(Math.random() * 360)}`

const randomX = () =>
    `${Math.floor(Math.random() * 100)}`

const randomY = () =>
    `${Math.floor(Math.random() * 100)}`

class Bees extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                width: "3%",
                transform: ''
                // transform: `translateX(${randomX()}px) translateY(${randomY()}px) rotate(${randomDegrees()}deg)`
            },
            x: 0,
            y: 0,
        }
        this.moveBee = this.moveBee.bind(this)
        this.updateCoordinates = this.updateCoordinates.bind(this)

    }
    // moveBee = () => {
    //     this.setState({
    //         style: {
    //             width:"3%",
    //             transform: `translateX(${randomX()}px) translateY(${randomY()}px) rotate(${randomDegrees()}deg)`
    //         }
    //     })
    // }

    moveBee = (e) => {
        this.setState({
            style: {
                width: "3%",
                transform: `translateX(${e.nativeEvent.offsetX}) translateY(${e.nativeEvent.offsetY})`
            }

        })
    }

    updateCoordinates = (e) => {
        this.setState({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })
    }




    render() {
        const { x, y } = this.state;
        return (
            <div id="bees" className="componentDisplay" style={this.state} onMouseMove={this.updateCoordinates}>
                <img className="beeImg" src="./images/bee.png" style={this.state.style} onMouseMove={this.moveBee} />
                <h1>Mouse Coordinates x={x} y={y}</h1>
            </div>
        )
    }
}

export default Bees
