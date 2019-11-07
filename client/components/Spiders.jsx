import React from 'react'

const randomSizedSpider = () => 
`${Math.floor(Math.random() * 200) + 50}px`

//make a timer for spider to appear
//randomise location of where it appears
//randomise direction it faces

class Spiders extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            style : {
            backgroundColor: 'orange',
            width: randomSizedSpider(),
            height: randomSizedSpider()
            }
        }
    }

    render() {
       return (
        <div className="componentDisplay">
            <img src="./images/spider.png" alt=""/>
        </div>
       )
    }
}

export default Spiders