import React, {useState} from "react";
import "./Blogs.css";
import BlogCard from "../blog-card/BlogCard";
import {AllBlogs} from "../../static/data/Blogs";

export default function Blogs() {

    return (
        <div className={"h-100 d-md-flex justify-content-center align-items-center"}>
            <div>
                <h1 className={"mt-4"}>Blogs</h1>
                <div className={"row"} style={{alignContent: "center"}}>
                    {AllBlogs.sort((a, b)=> b.date.getTime() - a.date.getTime()).map((blog) => {
                            if(blog.private) return;
                            return <BlogCard className={"col-md-4"} blog={blog}/>
                    })}
                </div>
            </div>
        </div>
    )
}
