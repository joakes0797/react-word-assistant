import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <ul class="nav">
                <li><h5>&copy; {today.getFullYear()} WordleAssistant</h5></li>
                {/* <Link to="/Privacy"><h4>Privacy</h4></Link> */}
                <li><a href="/Privacy"><h4>Privacy</h4></a></li>
            </ul>
        </footer>
    )
}

export default Footer