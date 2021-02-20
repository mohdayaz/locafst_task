import React, { Component } from 'react'

class RedirectOnError extends Component {

    constructor(props) {
        super(props)
        this.totalSeconds = 3;
        this.state = {
            secondsRemaining: this.totalSeconds,
            redirected: false,
        }

        this.tick = this.tick.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
    }

    componentDidMount() {
        this.startCountDown();
    }

    tick() {
        var sec = this.state.secondsRemaining - 1;
        if (sec === 0) {
            clearInterval(this.intervalHandle);
            window.location.reload()
        } else {
            this.setState({
                secondsRemaining: sec
            })
        }
    }

    startCountDown() {
        // this.intervalHandle = setInterval(this.tick, 1000);
    }

    render() {
        return (
            <div className="redirectx">
                Something went wrong. Redirecting you in {this.state.secondsRemaining} ...
            </div>
        )
    }
}

export default RedirectOnError	
