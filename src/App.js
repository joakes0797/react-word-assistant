import React from "react";
import './App.css';
import { SearchForm } from './SearchForm'

const Navbar = () => {
    return (
        <>
            <h3>This is the Navbar component</h3>
        </>
    )
}
const Footer = () => {
    return (
        <>
            <h4>&copy; 2022 WordleAssistant</h4>
        </>
    )
}

const App = () => {
    
    // const showAnswers = (green) => {
    //     const result = fetch(`${answers}&s=${green}`);
    //     console.log(result);
    // }

    // useEffect(() => {
    //     showAnswers('aaaaa');

    // }, []);

    return (
        <div className="App">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="search">
                <SearchForm />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;