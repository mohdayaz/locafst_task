import { useEffect, useState } from "react";
import ApplicationCard from "./ApplicationCard";
import Loader from "./Loader"

const JobApplications = props => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    const getData = () => {
        setLoader(true)
        const url = `/recruiters/jobs/${props.id}/candidates`
        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(responseData => {
            if(responseData.success) {
                setData(responseData.data)
                setLoader(false)
            }
        })
    }

    useEffect(() => {
        getData()
    }, props.id)

    return (
        loader ? <Loader /> : (
            data ? <div className="job-application">
                <h2 className="counts">{`Total ${data.length} applications`}</h2>
                <div className="card-container">
                {data.map(e => <ApplicationCard 
                    id={e.id}
                    name={e.name}
                    email={e.email}
                    skills={e.skills}
                />)}
                </div>
            </div> : <div>No Data Available</div>
        )
    );
}

export default JobApplications