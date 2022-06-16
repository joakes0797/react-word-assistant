import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // <header>
        //     <Link to="/"><h4>Clear Form</h4></Link>
        //     <Link to="/Donate"><h4>Donate</h4></Link>
        //     <Link to="/Results"><h4>Results</h4></Link>
        // </header>

        <header>
            <ul class="nav">
                <li><a href="/"><h4>Clear Form</h4></a></li>
                <li><a href="/Donate"><h4>Donate</h4></a></li>
                <li><a href="/Results"><h4>Results</h4></a></li>
            </ul>
        </header>
    )
}

export default Navbar