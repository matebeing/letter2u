import React, { useState, useEffect } from "react";
import letter from './openletter.png';
import './ReadLetter.css';
import Navbar from '../../components/Navbar/Navbar.jsx'
import { useHistory, useLocation  } from "react-router-dom";


function ReadLetter(props) {
  const location = useLocation();

  const [ticket, setTicket] = useState("");
  const [to, setTo] = useState("You");
  const [from, setFrom] = useState("Unknwon");
  const [content, setContent] = useState("Hey! Follow me on instagram @mate-developer");

  useEffect(() => {
    if (location.state) {
      setTicket(location.state.direct)
      setContent(location.state.content)
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000' },
        body: JSON.stringify({id: window.location.pathname.split("/")[2]})
      };
      fetch('http://localhost:5000/api/getLetter', requestOptions)
          .then(response => response.json())
          .then(data => {
            setContent(data.content)
            setFrom(data.from)
          })
          .catch((error) => {console.log(error)});
    }
  })

  const handleClick = () => {
    setTicket(true)
  }

  return (
    <div className="ReadLetter">
      <Navbar />
      <div style={{display: ticket ? "none" : "flex"}} className="ReadLetter-content">
        <header className="ReadLetter-content-header">
          <img onClick={handleClick} style={{marginRight: "50px", height: "200px"}} src={letter}  alt="letter"/>
          <span>(click to read)</span>
          <span style={{fontWeight: 700, fontSize: "20px"}}>{from} wrote you a letter.</span>
        </header>
      </div>
      <div className="ReadLetter-content" style={{display: ticket ? "flex" : "none"}}>
        <div className="ReadLetter-content-header-letter">
          <section style={{display: 'flex', flexDirection: 'column', fontWeight: '600'}}>
            <span>From: {from}</span>
            <span>To: {to}</span>
            <div style={{marginTop: '10px', borderBottom: '1px solid rgb(223, 223, 223)', fontWeight: '500'}}>
              <span style={{fontSize: '12px'}} className="ReaderLetter-content-header-letter-link">{window.location.href}</span>
            </div>

          </section>
          <p style={{whiteSpace: 'pre-line'}}>{content}</p>
        </div>
      </div>
    </div>  
  );
}

export default ReadLetter;