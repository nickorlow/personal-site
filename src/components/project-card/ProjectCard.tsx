import React, {useState} from "react";
import "./ProjectCard.css";
import ProjectCardProps from "../../types/ProjectCardProps";
import Modal from "react-modal";

export default function ProjectCard(props: {info: ProjectCardProps}) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className={"project-card col-md-4 p-2"}>
            <div className={"project-card-int pb-2 justify-content-center align-items-center d-flex flex-column"} style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, .60) 50%, rgba(0, 0, 0, 0.75) 100%), url(\""+props.info.imageUrl+"\")"}} onClick={()=>{setModalOpen(true)}}>
                <h4 className={"font-weight-bold"}>{props.info.title}</h4>
                <p className={"font-weight-lighter w-75"}>{props.info.shortDescription}</p>
                {/*<div>*/}
                {/*    <div className={"row"} style={{fontFamily: "monospace"}}>*/}
                {/*        {props.info.techUsed.slice(0, 3).map(s =>*/}
                {/*            <div className={"col-md-4 col-12 mt-2"}>*/}
                {/*                <div className={"lang-card "+s.toLowerCase().replace(" ", "")}>*/}
                {/*                    <p  style={{fontSize: 16, margin: 0}}>{s}</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <Modal className={"project-card-modal"} isOpen={isModalOpen}>
                <p className={"back-button"} onClick={()=>{setModalOpen(false)}}>Back</p>
                <h1>{props.info.title}</h1>
                <a href={props.info.link}>{props.info.linkTitle}</a>
                <p>{props.info.description}</p>
                <h3>All technologies used:</h3>
                <div className={"d-flex flex-wrap mw-100"}>
                    {props.info.techUsed.map(s =>
                        <div className={""}>
                            <div className={"lang-card-modal "+s.toLowerCase().replace(" ", "")}>
                                <p  style={{fontSize: 16, margin: 0}}>{s}</p>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
}
