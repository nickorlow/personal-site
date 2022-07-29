import {AllProjects} from "../../static/data/Projects";
import InfoCard from "../info-card/InfoCard";
import React, {useState} from "react";
import {AllHobbies} from "../../static/data/Hobbies";
import {Carousel} from "react-bootstrap";

export default function Projects() {
    const [cur, setCur] = useState(1);
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

                <div className={"align-content-center d-md-block d-none"}>
                    <h1>Projects</h1>
                    <p>(writing code is my biggest hobby)</p>
                    <div className={"row m-0"} style={{justifyContent: "center", padding: 20}}>
                        {AllProjects.map((project) => <InfoCard className={"col-md-6"} style={{textAlign: "left",marginTop: 35, paddingLeft: 20, paddingRight: 20}}
                                                                info={project}/>)}
                    </div>
                    <a href={"https://github.com/nickorlow"}>More on GitHub</a>
                </div>
                <div className={"align-content-center d-md-none"}>
                    <h1 className={"mb-4"}>Projects</h1>
                    <p>{cur}/{AllProjects.length}</p>
                    <Carousel controls={false} interval={null} onSlide={(e)=>{setCur(e+1)}} indicators={false} wrap={false}>
                        {AllProjects.map((project, i) =>
                            <Carousel.Item>
                                <InfoCard className={"col-md-6"} style={{textAlign: "left",marginTop: 35, paddingLeft: 20, paddingRight: 20}}
                                          info={project}/>
                            </Carousel.Item>
                        )}
                    </Carousel>

                </div>
            </div>
        </div>
    )
}
