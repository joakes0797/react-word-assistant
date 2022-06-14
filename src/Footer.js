import React from "react";

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <h4>&copy; {today.getFullYear()} WordleAssistant</h4>
        </footer>
    )
}

export default Footer