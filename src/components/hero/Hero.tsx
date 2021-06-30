import TexasIcon from "../../static/images/texas-icon.png";
import SocialBar from "../social-bar/SocialBar";
import React from "react";

export default function Hero() {
    return (
        <div>
            <div className={"child"} style={{
                height: "95vh",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <img alt="github profile" src={"https://avatars.githubusercontent.com/u/85139485?v=4"}
                     style={{height: "30vh", width: "auto"}} className={"pfp"}/>
                <h1 className={"m-0 font-weight-bold"}>Nicholas Orlowsky</h1>
                <h4 className={"m-0"}>Software Engineer</h4>
                <div className={"row"}>
                    <img alt={"github profile"} className={"fade-in-tx"} src={TexasIcon} style={{height: 50}}/>
                    <p className={"move-left-atx"} style={{marginTop: 11}}>Austin, Texas</p>
                </div>
                <SocialBar style={{justifyContent: "center", width: "60vmin"}}/>
            </div>
            <p className={"fade-up-d3s"}>scroll for more</p>
        </div>
    );
}
