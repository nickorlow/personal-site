import React from "react";

export default function AboutMe() {
    return (
        <div className={"child"} style={{minHeight: "100vh"}}>
            <div className={"row"} style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                minHeight: "50rem"
            }}>
                <h1 className={"col-12"} style={{marginBottom: 20}}>About Me</h1>
                <div className={"col-12"} style={{width: "100vw", justifyContent: "center", display: "flex"}}>
                    <p className={"col-12"} style={{maxWidth: 600}}>
                        I was born and raised in Austin, Texas. I've been writing code for nearly 7 years and I'm
                        currently going to <b>The University of Texas at Austin</b> and working as the <b>Chief Technology Officer</b> at <b>Comp Wallet Corp.</b>
                    </p>
                </div>

                <div className={"col-12"} style={{width: "100vw", justifyContent: "center", display: "flex"}}><p
                    style={{maxWidth: 600}}>Previously, I founded a startup called <b>CavCash</b> where I wrote a
                    majority of our software.</p></div>
                <div className={"col-12"} style={{width: "100vw", justifyContent: "center", display: "flex"}}><p
                    style={{maxWidth: 600}}>I primarily do backend work and love working with databases. I'm also an
                    avid runner and entrepreneur.</p></div>
            </div>
        </div>
    );
}
