import React, {useState} from 'react';
import './Home.css';
import Blogs from "../components/blogs/Blogs";

function Blog() {

    return (
        <div className="Blog" style={{padding: 20}}>
            <h1>Blog</h1>
            <Blogs/>
        </div>
    );
}

export default Blog;
