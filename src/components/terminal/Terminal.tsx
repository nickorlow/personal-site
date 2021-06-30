import Typing from "react-typing-animation";
import React, {Dispatch} from "react";

export default function Terminal(props: {isTerminalVisible: boolean, setIsTerminalVisible: Dispatch<boolean>}) {
    return (
        <div className={props.isTerminalVisible ? "" : "fade-out"}  style={{position: "fixed", top: 0, left: 0, width: "99vw", height: "100vh", backgroundColor: "black",textAlign: "left"}}>
            <p className={"d-inline"}>nickorlow@macbook ~# </p>
            <Typing speed={20} className={"d-inline"} onFinishedTyping={() => props.setIsTerminalVisible(false)}>
                <p className={"d-inline"}>git clone <p className={"d-inline"} style={{color: "#00aaee"}}>https://github.com/nickorlow/personal-site</p></p>
                <Typing.Speed ms={0} />
                <p/>
                <p className={"m-0"}>Cloning into 'personal-site'...</p>
                <p className={"m-0"}>remote: Enumerating objects: 334, done.</p>
                <p className={"m-0"}>remote: Counting objects: 100% (334/334), done.</p>
                <p className={"m-0"}>remote: Compressing objects: 100% (185/185), done.</p>
                <p className={"m-0"}>remote: Total 334 (delta 132), reused 324 (delta 127), pack-reused 0</p>
                <p className={"m-0"}>Receiving objects: 100% (334/334), 29.68 MiB | 5.50 MiB/s, done.</p>
                <p className={"m-0"}>Resolving deltas: 100% (132/132), done.</p>
                <p/>
                <p className={"d-inline"}>nickorlow@macbook ~# </p>
                <Typing.Speed ms={10} />
                <p className={"d-inline"}>cd persona-site</p>
                <Typing.Backspace speed={10} count={5}/>
                <p className={"d-inline"}>l-site</p>
                <p/>
                <Typing.Speed ms={0} />
                <p className={"d-inline"}>nickorlow@macbook ~# </p>
                <Typing.Delay ms={200}/>
                <Typing.Speed ms={100} />
                <p className={"d-inline"}>npm run start</p>
            </Typing>
        </div>
    )
}
