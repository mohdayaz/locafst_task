import { faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'materialize-css';
import { useEffect, useState } from 'react';
import {Link, Redirect} from "react-router-dom"

function Navbar(props) {

    const [showLogoutButton, setShowLogoutButton] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const logout = () => {
        localStorage.clear()
        setRedirect(true)
    }


    return (
        <nav>
            <div class="nav-background"></div>
            <div class="nav">
                <div class="logo">My<span>Jobs</span></div>
                {props.isLoggedIn &&  <ul class="right">
                    {localStorage.getItem("userRole") == 0 && <Link to="/post-job" className="nav-item"><li>POST A JOB</li></Link>}
                    {localStorage.getItem("userRole") == 1 && <Link to="/applied-job" className="nav-item"><li>Applied jobs</li></Link>}
                    <li className="profile-tab">
                        {localStorage.getItem("name") && <div class="name">{localStorage.getItem("name").substring(0,1)}</div>}
                        <div onClick={() => setShowLogoutButton(!showLogoutButton)} class="down-arrow"><FontAwesomeIcon icon={faAngleDown}/></div>
                        {showLogoutButton && <div onClick={() => logout()} className="logout">LogOut</div>}
                    </li>
                    {redirect && <Redirect to="/login"/>}
                </ul>}
                {props.showLoginButton && <Link to="/login"><button>Login/Signup</button></Link>}
            </div>
            {props.isLoggedIn && <Link to={"/"}><div className="bradcrum"><FontAwesomeIcon icon={faHome}/> Home</div></Link>}
        </nav>
    );
}

export default Navbar