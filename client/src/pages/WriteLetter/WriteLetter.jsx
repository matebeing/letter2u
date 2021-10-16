import React, { useState } from "react";
import './WriteLetter.css';
import Navbar from '../../components/Navbar/Navbar.jsx'
import { useHistory } from "react-router-dom";

function WriteLetter() {
    let history = useHistory();

    const [submit, setSubmit] = useState(false)

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [content, setContent] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (content.length >= 10) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000' },
                body: JSON.stringify({ from: from.length === 0 ? "Unknwon" : from, to: to.length === 0 ? "Unknwon" : to, content: content, open: open})
            };
            fetch('http://localhost:5000/api/createLetter', requestOptions)
                .then(response => response.json())
                .then(data => history.push({pathname: "/read/" + data.id, state: {direct: true, to: data.to, from: data.from, content: data.content}}))
                .catch((error) => {console.log(error)});

        } else {
            alert("Insufficient content written")
        }
    }

    return (
        <div className="WriteLetter">
            <Navbar />
            <div className="WriteLetter-content">
                <header className="WriteLetter-content-header">
                    <form onSubmit={handleSubmit}>
                        <div className="WriteLetter__address">
                            <label>From: <input onChange={e => setFrom(e.target.value)} type="text" placeholder="Name" /></label>
                            <label>To: <input onChange={e => setTo(e.target.value)} type="text" placeholder="Name" /></label>
                        </div>
                        <div className="WriteLetter__textarea">
                            <textarea onChange={e => setContent(e.target.value)} placeholder="Write here..."></textarea>
                        </div>
                        <div className="WriteLetter__submit">
                            <div>
                                <input onClick={e => setOpen(e.target.checked)} type="checkbox" name="private" id="private" />
                                <label for="private">Private</label>
                            </div>
                            <div>
                                <button  style={{backgroundColor: "#FE729C", color: "#FFF", padding: "10px", width: "200px"}} type="Submit">Finish</button>
                            </div>
                        </div>
                    </form>
                </header>
            </div>
        </div>
    );
}

export default WriteLetter;