import React from 'react'

const randomSizedSpider = () =>
    `${Math.floor(Math.random() * 600) + 100}px`

const randomDegrees = () =>
    `${Math.floor(Math.random() * 360)}deg`

const randomX = () =>
    `${Math.floor(Math.random() * 900)}`

const randomY = () =>
    `${Math.floor(Math.random() * +600)}`


//make a timer for spider to appear
//randomise location of where it appears
//randomise direction it faces

class Spiders extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                width: '15%',
                transform: `translateX(${randomX()}px) translateY(${randomY()}px)`,
                // visibility: 'hidden'
            }
        }

    }

    moveSpider = (event) => {
        let degs = randomDegrees()
        this.setState({
            style: {
                transform: `translateX(${randomX()}px) translateY(${randomY()}px)`,
                maxWidth: '15%',
                // visibility: 'visible'

            }
        })
    }


    render() {
        return (
            <div id="spiderWeb" className="componentDisplay" >
                <h1>Squish the spider!</h1>
                <img className="spiderImg" src="./images/spider.png" alt="" style={this.state.style} onMouseOver={this.moveSpider} />
            </div>
        )
    }
}

export default Spiders

//how to animate the spider