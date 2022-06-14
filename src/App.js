import React from "react";
import './App.css';
import Navbar from "./Navbar";
import { SearchForm } from './SearchForm'
import Footer from "./Footer";

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
            <Navbar />
            <main>
                <SearchForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;