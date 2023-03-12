import React from "react";

export default function AboutMe() {
    return (
        <div className={"child"} style={{minHeight: "100vh"}}>
            <div style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                minHeight: "50rem"
            }}>
                <h1 style={{marginBottom: 20}}>About Me</h1>
                <div style={{width: "100vw", justifyContent: "center", display: "flex"}}>
                    <p style={{maxWidth: 600}}>
                        I'm from Austin, Texas. I've been writing code for nearly 9 years and I'm
                        currently going to <b>The University of Texas at Austin</b>
                    </p>
                </div>


                <div style={{width: "100vw", justifyContent: "center", display: "flex"}}>
                    <p style={{maxWidth: 600}}>
                        I'm interested in infra and backend engineering.
                    </p>
                </div>

                <p style={{maxWidth: 600}}>If you would like to contact me, you can reach me at:</p>
                <a href={"mailto:nickorlow@nickorlow.com"}>nickorlow@nickorlow.com</a>
            </div>
        </div>
    );
}
