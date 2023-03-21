import React from "react";

export default function AboutMe() {
    return (
        <div  style={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            height: "95vh"
        }}>
            <div style={{maxWidth: 600}}>
                <h1>About</h1>
                <p>
                        I'm from Austin, Texas. I've been writing code for nearly 9 years and I'm
                        currently going to <b>The University of Texas at Austin</b>
                    </p>

                    <p>
                        I'm interested in infra and backend engineering.
                    </p>

                <p className={"mb-0"}>If you would like to contact me, you can reach me at:</p>
                <a href={"mailto:nickorlow@nickorlow.com"}>nickorlow@nickorlow.com</a>

                <p style={{color: "grey"}} className={"mb-0 mt-4 small"}>Website originally created by Nicholas Orlowsky - Licensed under GNU General Public License v3 - Original source available <a href={"https://github.com/nickorlow/personal-site"}>here</a></p>
                <p className={"small"}>Hosting provided by <a href={"https://nws.nickorlow.com"}>Nick Web Services (NWS)</a></p>
            </div>
        </div>
    );
}
