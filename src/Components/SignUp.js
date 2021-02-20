import { faUser, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, {Component} from "react"
import { Redirect, useHistory } from "react-router-dom"

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            type: "recruiter",
            name: "",
            confirmPassword: "",
            skill: "",
            skills: []
        }
    }

    signup() {
        const valueChecked = true
        const {email, password, name, confirmPassword, skills, type} = this.state
        const skillsArray = skills.map(e => e + ",")
        const skillsString = skillsArray.toString()
        if(valueChecked) {
            const url = "https://jobs-api.squareboat.info/api/v1/auth/register"
            const data_to_send = {
                email,
                userRole: type === "recruiter" ? 0 : 1,
                password,
                confirmPassword,
                name,
                skills: skillsString
            }
            fetch(url , {
                method: "POST",
                headers: {"content-type": "application/json"},
                body:  JSON.stringify(data_to_send)
            })
            .then(res => res.json())
            .then(responseData => {
                if(responseData.success) {
                    localStorage.setItem("id", responseData.data.id)
                    localStorage.setItem("token", responseData.data.token)
                    localStorage.setItem("userRole", responseData.data.userRole)
                    localStorage.setItem("name", responseData.data.name)
                    this.setState({login: true})
                }else {
                    alert(responseData.message || "Please check the fields")
                }
            })
        }
    }

    saveValue(e) {
        const key = e.target.name
        const value = e.target.value
        const splitStr = value.split(",")
        if(key === "skill" && splitStr.length > 1) {
            let skillsArray = this.state.skills
            skillsArray.push(splitStr[0])
            this.setState({
                skills: skillsArray,
                skill: ""
            })
        }else {
            this.setState({
                [key]: value
            })
        }
    }

    selectType (type) {
        this.setState({type})
    }

    render() {

        const {email, password, type, skill, skills, confirmPassword, name} = this.state

        return(<div className="login-signup-content">
            <h2 className="title">Signup</h2>
            <label>I'am a</label>
            <div className="login-type-tab">
                <div className={`tab ${type === "recruiter" && "active"}`} onClick={() => this.selectType("recruiter")}><FontAwesomeIcon icon={faUserTie}/> Recruiter</div>
                <div className={`tab ${type === "candidate" && "active"}`} onClick={() => this.selectType("candidate")}><FontAwesomeIcon icon={faUser}/> Candidate</div>
            </div>
            <label>Full Name</label>
            <input type="name" name="name" placeholder="Enter your full name" onChange={e => this.saveValue(e)} value={name}/>
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={e => this.saveValue(e)} value={email}/>
            <div className="w-50">
                <label >Create Password</label>
                <input  type="password" name="password" placeholder="Enter your password" onChange={e => this.saveValue(e)} value={password}/>
            </div>
            <div className="w-50">
                <label >Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Enter your password" onChange={e => this.saveValue(e)} value={confirmPassword}/>
            </div>
            <label>Skills</label>
            <input type="skill" name="skill" placeholder="Enter comma separated skills" onChange={e => this.saveValue(e)} value={skill}/>
            {skills.length > 0 && <div className="skills-container">
                {skills.map(e => <div className="skill">{e}</div>)}
            </div>}
            <div className="button-container">
                <button onClick={() => this.signup()}>Sign Up</button>
            </div>
            {this.state.login && <Redirect to={"/"} />}
            <p className="bottom-text">Have an account? <span onClick={() => this.props.gotoSignup("login")}>Login</span></p>
        </div>);
    }
}

export default SignUp