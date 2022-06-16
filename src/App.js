import React from "react";
import Navbar from "./Navbar";
import { SearchForm } from './SearchForm'
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Donate } from "./Donate";
import { Privacy } from "./Privacy";
import { Error } from "./Error";
import { Results } from "./Results";
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App" style={{ textAlign: "center"}}>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<SearchForm />} />
                        <Route path="/Donate" element={<Donate />} />
                        <Route path="/Privacy" element={<Privacy />} />
                        <Route path="/Results" element={<Results />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;