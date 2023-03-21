import React from "react";
import InfoCardProps from "../../types/InfoCardProps";

export default function InfoCard(props: {style?: any, className?: string, info: InfoCardProps}) {
    return (
        <div style={props.style} className={props.className}>
            <div style={{maxWidth: "100vw"}}>
            <h3>{props.info.title}</h3>
            <p>
                {props.info.description}
            </p>
            <div>
                <h4>{props.info.listTitle}</h4>
                <div className={"row"} style={{color: "green", fontFamily: "monospace"}}>
                    {props.info.list.map(s => <p className={"col-4"} style={{fontSize: 16}}>{s}</p>)}
                </div>
            </div>
            {props.info.link != null && <a href={props.info.link}>{props.info.linkTitle || "Relevant Link"}</a>}
            </div>
        </div>
    );
}
