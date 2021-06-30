import {AllProjects} from "../../static/data/Projects";
import InfoCard from "../info-card/InfoCard";
import React from "react";

export default function Projects() {
    return (
        <div className={"child"} style={{minHeight: "100vh"}}>

            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100vw",
                minHeight: "100vh",
                alignContent: "center",
                alignItems: "center"
            }}>
                <h1>Projects</h1>
                <p>(writing code is my biggest hobby)</p>
                <div className={"row m-0"} style={{justifyContent: "center", padding: 20}}>
                    {AllProjects.map((project) => <InfoCard className={"col-md-6"} style={{textAlign: "left",marginTop: 35, paddingLeft: 20, paddingRight: 20}}
                                                            info={project}/>)}
                </div>
                <a href={"https://github.com/nickorlow"}>More on GitHub</a>

            </div>
        </div>
    )
}
