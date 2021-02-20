import React, {Component} from "react"
import JobsContainer from "./JobsContainer"

class CandidateHome extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <div className="home">
                <h2 className="title">Jobs for you</h2>
                <JobsContainer userRole={1} showApplyButton={true} endPoint={"/candidates/jobs"}/>
            </div>
        );
    }
}

export default CandidateHome