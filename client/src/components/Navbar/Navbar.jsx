
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li style={{color: '#6d4444'}}>Letter2U</li>
                <Link to="/"><li>Home</li></Link>
                <Link to={{pathname: "https://www.grammarly.com/blog/how-to-write-a-letter/"}} target="_blank" ><li>How to write a letter?</li></Link>
            </ul>
        </div>
    );
  }
  
  export default Navbar;