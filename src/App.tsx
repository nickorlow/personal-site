import React, {useState} from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/about-me/AboutMe";
import Jobs from "./components/jobs/Jobs";
import Projects from "./components/projects/Projects";
import Hobbies from "./components/hobbies/Hobbies";
import Contact from "./components/contact/Contact";
import Terminal from "./components/terminal/Terminal";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {

    const showTerm: boolean = new URLSearchParams(window.location.search).get("showTerm") === 'true';
    const [isTerminalVisible, setIsTerminalVisible] = useState(showTerm);

    return (
        <Router basename={'/~nickorlo'}>
            <Route path='*'>
                <div className="App">
                    {showTerm && <Terminal isTerminalVisible={isTerminalVisible} setIsTerminalVisible={setIsTerminalVisible}/>}
                    {!isTerminalVisible &&
                        <div>
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
            </Route>
        </Router>
      );
}

export default App;
