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

                <div>

                    {AllHobbies.map((hobby) => <InfoCard style={{textAlign: "left", maxWidth: "50vmax", margin: 50}}
                                                         info={hobby}/>)}
                </div>

        </div>
    )
}
