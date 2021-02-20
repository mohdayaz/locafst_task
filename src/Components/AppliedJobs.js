import React, {Component} from "react"
import JobsContainer from "./JobsContainer"
import Navbar from "./Navbar"

class CandidateHome extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(<React.Fragment>
            <Navbar isLoggedIn={true}/>
            <div className="applied-jobs">
                <h2 className="title">Applied Jobs</h2>
                <JobsContainer userRole={1}  endPoint={"/candidates/jobs/applied"}/>
            </div>
        </React.Fragment>);
    }
}

export default CandidateHome