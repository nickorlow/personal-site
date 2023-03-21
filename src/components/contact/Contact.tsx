import React from "react";

export default function Contact() {
    return (
        <div  style={{minHeight: "90vh"}}>
            <div style={{minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                    <h1>Contact</h1>
                    <p style={{maxWidth: 500}}>If you need: startup advice, tech/programming help, an employee (me!), or just someone to talk to, feel free to email me at:</p>
                    <a href={"mailto:nickorlow@nickorlow.com"}>nickorlow@nickorlow.com</a>
                </div>
            </div>
        </div>
    )
}
