import React, {Component} from "react"
import LogIn from "./Login"
import SignUp from "./SignUp";
import Navbar from "./Navbar"
class LogInSignUP extends Component {
    constructor() {
        super()
        this.state = {
            activeTab: "login"
        }
    }

    gotoSignup(e) {
        this.setState({activeTab: e})
    }

    render() {
        return(<div>
            <Navbar />
            <div className="login-signup-container">
                <div className="login-signup-card">
                    {this.state.activeTab === "login" && <LogIn gotoSignup={e => this.gotoSignup(e)}/>}
                    {this.state.activeTab === "signup" && <SignUp gotoSignup={e => this.gotoSignup(e)}/>}
                </div>
            </div>
        </div>);
    }
}

export default LogInSignUP