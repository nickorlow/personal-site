import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import {Link} from "react-router-dom";
import Job from "../../types/Job";
import "./BlogCard.css";
import Blog from "../../types/Blog";

export default function BlogCard(props: {style?: any, className?: string, blog: Blog}){
    return (
        <div className={"blog-card "+(props.className || "")} style={props.style}>
            <Link to={"/blog/"+props.blog.uri}  className={"blog-card-int"}>
                <div className={"blog-card-info"}>
                    <h4 className={"font-weight-bold"}>{props.blog.title}</h4>
                    <p className={"font-weight-lighter"}>{props.blog.date.toLocaleDateString()}</p>
                </div>
            </Link>
        </div>
    );
}
