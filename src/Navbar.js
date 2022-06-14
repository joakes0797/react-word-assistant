import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div>
                <Link to="/"><h4>Clear Form</h4></Link>
                <Link to="/Donate"><h4>Donate</h4></Link>
            </div>
        </header>
    )
}

export default Navbar