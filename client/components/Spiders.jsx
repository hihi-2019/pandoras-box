import React from 'react'

const randomSizedSpider = () =>
    `${Math.floor(Math.random() * 150) + 100}px`

const randomDegrees = () =>
    `${Math.floor(Math.random() * 360)}deg`

const randomX = () =>
    `${Math.floor(Math.random() * 1000)}`

const randomY = () =>
    `${Math.floor(Math.random() * 700)}`


class Spiders extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                width: `${randomSizedSpider()}`,
                transform: `translateX(${randomX()}px) translateY(${randomY()}px)`
                
                // visibility: 'hidden'
            }
        }

    }

    moveSpider = (event) => {
        this.setState({
            style: {
                transform: `translateX(${randomX()}px) translateY(${randomY()}px)`,
                width: 'randomSizedSpider()'
                // visibility: 'visible'

            }
        })
    }


    render() {
        return (
            <div id="spiderWeb" className="componentDisplay custom" >
                <h1>Squish the spider!</h1>
                <img className="spiderImg custom" src="./images/spider.png" alt="" style={this.state.style} onMouseOver={this.moveSpider} />
            </div>
        )
    }
}

export default Spiders
