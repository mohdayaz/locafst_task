import React, {Component} from "react"
import JobsContainer from "./JobsContainer"

class RecruiterHome extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {

        return(
            <div className="recruiter-home home">
                <h2 className="title">Jobs posted by you</h2>
                <JobsContainer userRole={0} showViewButton={true} endPoint={"/recruiters/jobs"}/>
            </div>
        );
    }
}

export default RecruiterHome