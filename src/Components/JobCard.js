import { faMapMarked, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const JobCard = props => {

    const {id, title, description, location, viewApplication, showApply, name, email, skills} = props

    return (
        <div className="card" >
            {description && <p className="content">{description}</p>}
            {location && <div className="location"><FontAwesomeIcon icon={faMapPin}/>{location}</div>}
            {viewApplication && <button onClick={() => props.viewJob(id)} className="view-button">View Application</button>}
            {showApply && <button onClick={() => props.applyJob(id)} className="view-button">Apply</button>}
        </div>
    )
}

export default JobCard