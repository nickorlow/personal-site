import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import Job from "../../types/Job";
import "./BlogCard.css";
import Blog from "../../types/Blog";

export default function BlogCard(props: {style?: any, className?: string, blog: Blog, num: number}){
    return (
        <ScrollAnimation className={"blog-card "+(props.className || "")} style={props.style} animateIn="fade-up" duration={2} animateOnce={true} offset={50} delay={200}>
            <div onClick={()=>{window.location.href="/blog?id="+props.num}} className={"blog-card-int"}>
                {/*<img className={"blog-card-img"} src={props.blog.image}/>*/}
                <div className={"blog-card-info"}>
                    <h3>{props.blog.title}</h3>
                    <p>{props.blog.date.toLocaleDateString()}</p>
                </div>
            </div>
        </ScrollAnimation>
    );
}
