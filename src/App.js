import logo from './logo.svg';
import './App.css';
import SideBar from "./components/SideBar"
import NavBar from "./components/Navbar"
import Home from "./components/Home"

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
