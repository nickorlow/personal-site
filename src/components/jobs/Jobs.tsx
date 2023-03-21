import {AllJobs} from "../../static/data/Jobs";
import JobCard from "../job-card/JobCard";
import React, {useState} from "react";
import "./Jobs.css";
import {Carousel} from "react-bootstrap";


export default function Jobs() {
    const [cur, setCur] = useState(1);
    return (
        <div  style={{minHeight: "100vh"}}>
            <div className={"align-content-center d-md-block d-none"}>
                <h1 style={{marginBottom: 40}}>Work</h1>
                {AllJobs.map((job, i) =><JobCard job={job}/>)}
            </div>
            <div className={"align-content-center d-md-none"}>
                <h1 className={"mb-4"}>Work</h1>
                <p>{cur}/{AllJobs.length}</p>
                <Carousel controls={false} interval={null}  onSlide={(e)=>{setCur(e+1)}} indicators={false} wrap={false}>
                    {AllJobs.map((job, i) =>
                        <Carousel.Item>
                            <JobCard job={job}/>
                        </Carousel.Item>
                    )}
                </Carousel>

            </div>
        </div>
    )
}
