import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <ul className="nav">
                <Link className="navli" to="/"><h4>Clear Form</h4></Link>
                <Link className="navli" to="/Donate"><h4>Donate</h4></Link>
                <Link className="navli" to="/Results"><h4>Results</h4></Link>
            </ul>
        </header>
    )
}

export default Navbar