import {AllHobbies} from "../../static/data/Hobbies";
import InfoCard from "../info-card/InfoCard";
import React from "react";

export default function Hobbies () {
    return (
        <div className={"child"} style={{minHeight: "100vh"}}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "96vw",
                minHeight: "100vh",
                alignContent: "center",
                alignItems: "center"
            }}>
                <h1>Other Hobbies</h1>
                {AllHobbies.map((hobby) => <InfoCard style={{textAlign: "left", maxWidth: "50vmax", margin: 50}}
                                                     info={hobby}/>)}
            </div>
        </div>
    )
}
