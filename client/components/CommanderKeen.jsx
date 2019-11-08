import React from 'react'
// import { url } from 'inspector'

const fireImages = ['/images/ck1.jpg', '/images/ck2.jpg', '/images/ck3.jpg', '/images/ck4.jpg', '/images/ck5.jpg', '/images/ck6.jpg', '/images/ck7.jpg', '/images/ck8.jpg', '/images/ck9.jpg']



class CommanderKeen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                backgroundImage: "url('/images/ck1.jpg')",

            },
            currentImg: 1
        }
        this.playKeen = this.playKeen.bind(this)
    }

    playKeen = () => {

        setInterval(() => {
            if (this.state.currentImg >= 9) {
                this.setState({
                    currentImg: 1
                })
            }
            this.setState({
                currentImg: this.state.currentImg + 1
            })
        }, 1000)
    }


    render() {
        return (
            <div className="componentDisplay">
                <div id="keen" onClick={this.playKeen} style={{ backgroundImage: `url('/images/ck${this.state.currentImg}.jpg')` }}>

                </div>
            </div>

        )
    }
}


export default CommanderKeen