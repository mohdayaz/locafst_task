import Navbar from "./Navbar"
import {Link} from "react-router-dom"

const Home = () => {
    const image = "http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
    return (<div className="home">
        <Navbar showLoginButton={true} />
        <div className="home-inner">
            <div className="top-content">
                <h2>Welcome to</h2>
                <p >My<span>JOb</span></p>
                <Link to="/login"><button>Get Started</button></Link>
            </div>
            <div className="content-image">
                <img src="http://www.apimages.com/Images/Creative_Stock_T_3.jpg"/>
            </div>
            <div className="home-card-container">
                <p>Why us</p>
                <div className="card">
                    <div className="title">Get more visibility</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
                <div className="card">
                    <div className="title">Get more visibility</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
                <div className="card">
                    <div className="title">Get more visibility</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
            </div>
            <div className="client-container">
                <p>companies who trust us</p>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
            </div>
        </div>
    </div>)
}

export default Home