import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import Job from "../../types/Job";
import "./JobCard.css";

export default function JobCard(props: {style?: any, className?: string, job: Job, isCenter: boolean}){
    return (
        <ScrollAnimation className={"job-card "+(props.isCenter ? "center-card " : "")+(props.className || "")} style={props.style} animateIn="fade-up" duration={2} animateOnce={true} offset={50} delay={200}>
            <div style={{padding: 20}}>
                <img alt={props.job.company+" company logo"} src={props.job.image} style={{maxHeight: 70, padding: 10,width: "auto", maxWidth: "100%"}}/>
                <h2>{props.job.title}</h2>
                {props.job.uri == null && <h5>{props.job.company}</h5>}
                {props.job.uri != null && <a href={props.job.uri}><h5>{props.job.company}</h5></a>}
                <p>{props.job.timespan}</p>
                <ul>
                    {props.job.items.map((s) =>  <li>{s}</li>)}
                </ul>
            </div>
        </ScrollAnimation>
    );
}
