import letter from './letter.png';
import { useHistory } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar.jsx'
import './Home.css';

function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/write");
  }

  return (
    <div className="Home">
      <Navbar />
      <div className="Home-content">
        <header className="Home-content-header">
          <img style={{marginRight: "50px", height: "300px"}} src={letter}  alt="letter"/>
          <div style={{width: "500px"}}>
            <h1 style={{color: "#E84AA9"}}><span style={{color: "#681D4A"}}>Show you care:</span> Write a letter.</h1>
            <h2 style={{ fontWeight: 600, color: "#584D54"}}>Open your heart, show your love ones you care about them.</h2>
          </div>
        </header>
        <button onClick={handleClick} style={{marginTop: "50px", backgroundColor: "#FE729C", color: "#FFF", padding: "10px", width: "200px", borderRadius: "50px"}}>Start Writing</button>
      </div>
    </div>
  );
}

export default Home;