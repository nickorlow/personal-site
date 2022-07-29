import React, {useState} from "react";
import "./Blogs.css";
import BlogCard from "../blog-card/BlogCard";
import {AllBlogs} from "../../static/data/Blogs";

export default function Blogs() {

    let blogId = 0;

    return (
        <div className={"child"}>
            <div className={"row"} style={{alignContent: "center"}}>
                {AllBlogs.reverse().map((blog, i) => {
                    blogId++;
                    if(!blog.private) {
                        return <BlogCard num={AllBlogs.length - blogId} className={"col-md-4"} blog={blog}/>
                    }
                })}
            </div>
        </div>
    )
}
