import { faMapMarked, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ApplicationCard = props => {

    const {name, email, skills} = props

    return (
        <div className="card" >
            <div className="candidate">
                {name && <p className="name-alpha">{name.substring(0,1)}</p>}
                <div className="name-email">
                    {name && <p className="name">{name}</p>}
                    {name && <p className="email">{email}</p>}
                </div>
            </div>
            <p className="skill-label">Skills</p>
            <p className="skills">{skills}</p>
        </div>
    )
}

export default ApplicationCard