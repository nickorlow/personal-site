import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import Job from "../../types/Job";
import "./JobCard.css";

export default function JobCard(props: {style?: any, className?: string, job: Job}){
    return (
        <ScrollAnimation className={"job-card "+(props.className || "")} style={props.style} animateIn={"no-fade-up"} initiallyVisible={true} duration={2} animateOnce={true} offset={50} delay={200}>
            <div className={"row"} style={{paddingTop: 40}}>
                <div  className={"col-md-4"}>
                    <img className={"float-left float-md-none"} alt={props.job.company+" company logo"} src={props.job.image} style={{objectFit: "contain" ,height: "auto", width: "auto", maxHeight: 100, maxWidth: '300px'}}/>
                </div>
                <div className={"col-md-8 row"}>
                    <div className={"col-md-6 text-left"}>
                        <h2>{props.job.title}</h2>
                        {props.job.uri == null && <h5>{props.job.company}</h5>}
                        {props.job.uri != null && <a href={props.job.uri}><h5>{props.job.company}</h5></a>}
                        <p>{props.job.timespan}</p>
                    </div>
                    <div  className={"col-md-6 text-left"}>
                        {props.job.items.map((s) =>  <li>{s}</li>)}
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
}
