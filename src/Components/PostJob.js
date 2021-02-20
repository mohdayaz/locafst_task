import React, {Component} from "react"
import Loader from "./Loader"
import Navbar from "./Navbar"

class PostJob extends Component {
    constructor() {
        super()
        this.state = {
            jobTitle: "",
            jobDescription: "",
            location: ""
        }
    }

    setValue(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    createJob() {
        this.setState({loader: true})
        const url = `/jobs/`
        const data_to_send = {
            title: this.state.jobTitle,
            description: this.state.jobDescription,
            location: this.state.location
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "content-type": "application/json"
            },
            body: JSON.stringify(data_to_send)
        })
        .then(res => res.json())
        .then(responseData => {
            if(responseData.success) {
                this.setState({loader: false})
            }else {

            }
        })
    }

    render() {

        const {jobTitle, jobDescription, location} = this.state

        return(
            <React.Fragment>
                <Navbar isLoggedIn={true}/>
                <div className="login-signup-container">
                    <div className="login-signup-card ">
                        {this.state.loader ? <Loader /> : <div className="login-signup-content">
                            <h2 className="title">Post a Job</h2>
                            <label>Job Title</label>
                            <input placeholder="Enter job title" name="jobTitle" value={jobTitle} onChange={e => this.setValue(e)}/>
                            <label>Description</label>
                            <textarea rows="5" placeholder="Enter job description" name="jobDescription" value={jobDescription} onChange={e => this.setValue(e)}/>
                            <label>Location</label>
                            <input placeholder="Enter location" name="location" value={location} onChange={e => this.setValue(e)}/>
                            <div className="button-container">
                                <button onClick={() => this.createJob()}>POST</button>
                            </div>
                        </div>}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PostJob