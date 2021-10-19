import {AllJobs} from "../../static/data/Jobs";
import JobCard from "../job-card/JobCard";
import React from "react";
import "./Jobs.css";

export default function Jobs() {
    return (
        <div className={"child"} style={{minHeight: "100vh"}}>
            <div style={{alignContent: "center", padding: 50}}>
                <h1 style={{marginBottom: 40}}>Work</h1>
                {AllJobs.map((job, i) =><JobCard job={job}/>)}
            </div>
        </div>
    )
}
