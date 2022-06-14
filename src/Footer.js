import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <h4>&copy; {today.getFullYear()} WordleAssistant</h4>
            <Link to="/Privacy"><h4>Privacy</h4></Link>
        </footer>
    )
}

export default Footer