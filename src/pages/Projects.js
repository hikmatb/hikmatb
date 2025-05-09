import React from "react";
import "./Projects.css"
import Navbar from '../Navbar';

function Projects() {
    return (
        <div className="projects">
            <div className="projects-sidebar">
                <Navbar />
            </div>
            <div className="projects-content">
                <h1>Projects</h1>
            </div>
        </div>
    );
}

export default Projects;