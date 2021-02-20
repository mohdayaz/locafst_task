import React, {Component} from "react"
import Loader from "./Loader"
import Pagination from "./Pagination"
import Modal from "./Modal"
import {Link} from "react-router-dom"
import JobApplications from "./JobApplications"
import JobCard from "./JobCard"

class JobsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            totalPages: 1,
            page: 1,
            loader: false,
            showModal: false,
            applicationId: ""
        }
    }

    componentDidMount() {
        this.getData(1)
    }

    // returnUrl(page) {
    //     if(this.props.userRole == 1){
    //        return  `/candidates/jobs?page=${page}`// : `/candidates/jobs/applied`
    //     }
    //     if(this.props.userRole == 0){
    //         return  `/recruiters/jobs?page=${page}`
    //     }
    // }

    getData(page) {
        this.setState({loader: true, currentPage: page})
        const url = this.props.endPoint + "?page=" + page
        fetch(url, {
            method: "GET",
            headers: {"Authorization": localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(responseData => {
            if(responseData.success) {
                if(responseData.data) {
                    let totalPages = 1
                    const metaData = this.props.userRole == 0 ? responseData.data.metadata : responseData.metadata
                    if(metaData){
                        const {count, limit} = metaData
                        totalPages = parseInt(parseInt(count)/parseInt(limit)) + 1
                    }
                    this.setState({data: this.props.userRole == 0 ?  responseData.data.data : responseData.data, totalPages, loader: false})
                }else {
                    alert(responseData.message)
                    this.setState({loader: false})
                }
            }else {

            }
        })
    }

    getId(id) {
        this.setState({applicationId: id}, () => this.setState({showModal: true}))
    } 

    closeModal() {
        this.setState({showModal: false})
    }

    applyJob(id) {
        this.setState({loader: true})
        const url = "/candidates/jobs"
        fetch(url, {
            method: "POST",
            headers: {"Authorization": localStorage.getItem("token"), "content-type": "application/json"},
            body: JSON.stringify({jobId: id})
        })
        .then(res => res.json())
        .then(responseData => {
            if(responseData.success) {
                alert("Applied")
                this.setState({loader: false})
                this.getData(this.state.currentPage)
            }else {
                alert(responseData.message)
                this.setState({loader: false})
            }
        })
    }

    render() {

        const {page, totalPages, data, applicationId} = this.state

        return(
            <React.Fragment>
                <div className="recruiter-home">
                    { this.state.loader ? <Loader /> : <React.Fragment>
                        {data.length > 0 ? <div className="card-container">
                            {data.map(e => <JobCard 
                                title={e.title}
                                description={e.description}
                                id={e.id}
                                location={e.location}
                                viewApplication={this.props.showViewButton || false}
                                showApply={this.props.showApplyButton || false}
                                viewJob = {id => this.getId(id)}
                                applyJob = {id => this.applyJob(id)}
                            />)}
                        </div> : 
                            (
                                <div>
                                    <Link to="post-job"><button>Post a Job</button></Link>
                                </div>
                            )
                        }
                        {this.state.showModal && <Modal
                            title={"Applicants for this job"}
                            component={<JobApplications id={applicationId}/>}
                            closeModal={() => this.closeModal()}/>
                        }
                    </React.Fragment>}
                    {data && <Pagination totalPages={totalPages} currentPage={page} getData={page => this.getData(page)}/>}
                </div>
        </React.Fragment>
        );
    }
}

export default JobsContainer