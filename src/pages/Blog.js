import React from "react";
import "./Blog.css"
import Navbar from '../Navbar';

function Blog() {
    return (
        <div className="blog">
            <div className="blog-sidebar">
                <Navbar />
            </div>
            <div className="blog-content">
                <h1>Blog</h1>
            </div>
        </div>
    );
}

export default Blog;