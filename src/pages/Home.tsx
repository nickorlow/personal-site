import React, {useState} from 'react';
import './Home.css';
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/about-me/AboutMe";
import Jobs from "../components/jobs/Jobs";
import Projects from "../components/projects/Projects";
import Hobbies from "../components/hobbies/Hobbies";
import Contact from "../components/contact/Contact";
import Terminal from "../components/terminal/Terminal";

function Home() {

    const showTerm: boolean = new URLSearchParams(window.location.search).get("showTerm") === 'true';
    const [isTerminalVisible, setIsTerminalVisible] = useState(showTerm);

    return (
        <div className="Home">
            {showTerm && <Terminal isTerminalVisible={isTerminalVisible} setIsTerminalVisible={setIsTerminalVisible}/>}
            {!isTerminalVisible &&
                <div>
                    <div className={"w-100  d-flex justify-content-center align-content-center text-center p-1"} style={{backgroundColor: "#004C54", height: 40, position: "absolute", top: 0}} >
                        <p className={"text-white fw-bold"}>Fly Eagles Fly</p>
                        <img src={"https://logos-world.net/wp-content/uploads/2020/05/Philadelphia-Eagles-Logo.png"} style={{maxHeight: "100%", maxWidth: "100%"}}/>
                    </div>
                    <Hero/>
                    <AboutMe/>
                    <Jobs/>
                    <Projects/>
                    <Hobbies/>
                    <Contact/>
                    <Footer/>
                </div>
            }
        </div>
    );
}

export default Home;
