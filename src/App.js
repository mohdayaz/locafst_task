import logo from './logo.svg';
import './App.css';
import SideBar from "./Components/SideBar"
import NavBar from "./Components/Navbar"
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <div className="content">
        <div className="content-inner">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
