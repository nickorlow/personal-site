import React from "react";
import "./Navbar.css";
import {Link, useLocation} from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <div style={{maxWidth:"100%"}} className={"d-flex justify-content-center align-items-center " + (location.pathname === "/" ? "fade-up-d3s" : "")} >
            <div className={"d-flex flex-row justify-content-around"} style={{width: 700}}>
                <div className={"d-flex flex-column justify-content-center align-items-center"}>
                    <Link to={"/home"} className={"mb-0 no-blue-link"}>Home</Link>
                    <div className={"navbar-selected-pill " + ((location.pathname === "/" || location.pathname === "/home") ? "" : "navbar-unselected-pill")}/>
                </div>
                <div className={"d-flex flex-column justify-content-center align-items-center"}>
                    <Link to={"/about"} className={"mb-0 no-blue-link"}>About</Link>
                    <div className={"navbar-selected-pill " + (location.pathname === "/about" ? "" : "navbar-unselected-pill")}/>
                </div>
                <div className={"d-flex flex-column justify-content-center align-items-center"}>
                    <Link to={"/blogs"} className={"mb-0 no-blue-link"}>Blog</Link>
                    <div className={"navbar-selected-pill " + (location.pathname === "/blogs" ? "" : "navbar-unselected-pill")}/>
                </div>
                <div className={"d-flex flex-column justify-content-center align-items-center"}>
                    <Link to={"/projects"} className={"mb-0 no-blue-link"}>Projects</Link>
                    <div className={"navbar-selected-pill " + (location.pathname === "/projects" ? "" : "navbar-unselected-pill")}/>
                </div>
                <div className={"d-flex flex-column justify-content-center align-items-center"}>
                    <Link to={"/hobbies"} className={"mb-0 no-blue-link"}>Hobbies</Link>
                    <div className={"navbar-selected-pill " + (location.pathname === "/hobbies" ? "" : "navbar-unselected-pill")}/>
                </div>
            </div>
        </div>
    )
}
