import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import Loader from "./Loader"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            login: false,
            loader: false
        }
    }

    componentDidMount () {
        if(localStorage.getItem("token")) {
            this.setState({login: true})
        }
        this.setState({loader: false})
    }

    login() {
        const valueChecked = true
        const {email, password} = this.state
        if(valueChecked) {
            const url = "https://jobs-api.squareboat.info/api/v1/auth/login/"
            const data_to_send = {
                email,password
            }
            fetch(url , {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(data_to_send)
            })
            .then(res => res.json())
            .then(responseData => {
                if(responseData.success) {
                    localStorage.setItem("id", responseData.data.id)
                    localStorage.setItem("token", responseData.data.token)
                    localStorage.setItem("userRole", responseData.data.userRole)
                    localStorage.setItem("name", responseData.data.name)
                    localStorage.setItem("loggedin", true)
                    this.setState({login: true})
                }else {
                    alert(responseData.message || "Please check email and paasword")
                }
            })
        }
    }

    saveValue(e) {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    render() {

        const {email, password} = this.state

        return(
            this.state.loader ? <Loader /> : <div className="login-signup-content">
                <h2 className="title">Login</h2>
                <label>Email address</label>
                <input type="email" name="email" placeholder="Enter your email" onChange={e => this.saveValue(e)} value={email}/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" onChange={e => this.saveValue(e)} value={password}/>
                <div className="button-container">
                    <button onClick={() => this.login()}>Login</button>
                </div>
                <p className="bottom-text">New to MyJobs? <span onClick={() => this.props.gotoSignup("signup")}>Create an account</span></p>
                {this.state.login && <Redirect to={"/"} />}
            </div>
        );
    }
}

export default Login