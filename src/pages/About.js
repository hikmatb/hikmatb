import React from "react";
import "./About.css"
import Navbar from '../Navbar';

function About() {
    return (
        <div className="about">
            <div className="about-sidebar">
                <Navbar />
            </div>
            <div className="about-content">
                <h1>About Me</h1>
            </div>
        </div>
    );
}

export default About;