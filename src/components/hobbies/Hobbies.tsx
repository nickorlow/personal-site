import {AllHobbies} from "../../static/data/Hobbies";
import InfoCard from "../info-card/InfoCard";
import React, {useState} from "react";
import {AllJobs} from "../../static/data/Jobs";
import {Carousel} from "react-bootstrap";
import JobCard from "../job-card/JobCard";

export default function Hobbies () {
    const [cur, setCur] = useState(1);
    return (
        <div className={"child"} style={{minHeight: "100vh"}}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "96vw",
                height: "100vh",
                minHeight: "100vh",
                alignContent: "center",
                alignItems: "center"
            }}>
                <div className={"d-md-block d-none"}>
                    <h1>Other Hobbies</h1>
                    {AllHobbies.map((hobby) => <InfoCard style={{textAlign: "left", maxWidth: "50vmax", margin: 50}}
                                                         info={hobby}/>)}
                </div>

                <div className={"align-content-center d-md-none"}>
                    <h1 className={"mb-4"}>Other Hobbies</h1>
                    <p>{cur}/{AllHobbies.length}</p>
                    <Carousel controls={false} interval={null} onSlide={(e)=>{setCur(e+1)}} indicators={false} wrap={false}>
                        {AllHobbies.map((hobby, i) =>
                            <Carousel.Item>
                                <InfoCard style={{textAlign: "left", maxWidth: "50vmax", margin: 50}}
                                          info={hobby}/>
                            </Carousel.Item>
                        )}
                    </Carousel>

                </div>
            </div>
        </div>
    )
}
