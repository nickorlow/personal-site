import {AllJobs} from "../../static/data/Jobs";
import JobCard from "../job-card/JobCard";
import React from "react";
import "./Jobs.css";

export default function Jobs() {
    return (
        <div className={"child"} style={{minHeight: "100vh"}}>
            <div className={"row"} style={{justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                <h1 className={"col-12"} style={{marginBottom: 20}}>Work</h1>

                    {AllJobs.map((job, i) =><JobCard className={"col-md-4"} job={job}
                                                               isCenter={i % 2 === 1}/>)}

            </div>
        </div>
    )
}
