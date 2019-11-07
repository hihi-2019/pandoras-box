import React from 'react'

const randomSizedSpider = () => 
`${Math.floor(Math.random() * 600) + 100}px`

//make a timer for spider to appear
//randomise location of where it appears
//randomise direction it faces

class Spiders extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            style : {
                width: randomSizedSpider(),
            }
        }
        console.log('this.state:', this.state)

    }

    render() {
       return (
        <div id="spiderWeb" className="componentDisplay" >
            <img src="./images/spider.png" alt="" style={this.state.style}/>
        </div>
       )
    }
}

export default Spiders

//how to animate the spider