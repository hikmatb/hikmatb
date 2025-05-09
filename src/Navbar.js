import React from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
        <ul>
            <li>Hikmat Babalola</li>
            <li>
                <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
                </NavLink>
            </li>
            <li>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                Projects
                </NavLink>
            </li>
            <li>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>
                Blog
                </NavLink>
            </li>
        </ul>
        </div>
    );
}

export default Navbar;