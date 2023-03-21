import {AllProjects} from "../../static/data/Projects";
import InfoCard from "../info-card/InfoCard";
import React, {useState} from "react";
import {AllHobbies} from "../../static/data/Hobbies";
import {Carousel} from "react-bootstrap";
import ProjectCard from "../project-card/ProjectCard";

export default function Projects() {
    const [cur, setCur] = useState(1);
    return (
        <div  style={{minHeight: "100vh"}}>

            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100vw",
                minHeight: "100vh",
                alignContent: "center",
                alignItems: "center"
            }}>

                <div className={"align-content-center mb-4 mt-4"}>
                    <h1>Projects</h1>
                    <p>Click to learn more about each project</p>
                    <div className={"row m-0"} style={{justifyContent: "center", padding: 50}}>
                        {AllProjects.map((project) => <ProjectCard  info={project}/>)}
                    </div>
                    <a href={"https://github.com/nickorlow"}>More on GitHub</a>
                </div>
            </div>
        </div>
    )
}
