import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import CandidateHome from "./CandidateHome"
import Loader from "./Loader"
import Navbar from "./Navbar"
import RecruiterHome from "./RecruiterHome"

class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            redirect: false,
            loader: false

        }
    }

    componentDidMount() {
        this.setState({loader: true})
        if(localStorage.getItem("token")) {
            this.setState({loader: false})
        }else {
            this.setState({loader: false, redirect: true})
        }
    }

    render() {
        return (
            this.state.loader ? <Loader /> : <React.Fragment >
                <Navbar isLoggedIn={true}/>
                {localStorage.getItem("userRole") == 0 && <RecruiterHome />}
                {localStorage.getItem("userRole") == 1 && <CandidateHome />}
                {this.state.redirect && <Redirect to={"/home"}/>}
            </React.Fragment>
        );
    }
}

export default Dashboard