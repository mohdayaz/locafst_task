import React, {Component} from "react"
import Navbar from "./Navbar"
import Content from "./Router"

class Main extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(<div className="main">
            <Content />
        </div>);
    }
}

export default Main