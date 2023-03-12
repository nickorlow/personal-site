import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/about-me/AboutMe";
import Contact from "./components/contact/Contact";
import Hobbies from "./components/hobbies/Hobbies";
import Projects from "./components/projects/Projects";


const NavBarView = (props: {children: any}) => {
    return (
        <div>
            <div style={{height: "95vh"}}>
            {props.children}
            </div>
            <Navbar/>
        </div>
    )
}

const Main = () => {



    return (
        <div>
            <Routes>
                <Route element={<NavBarView><Hero/></NavBarView>} path='/'/>
                <Route element={<NavBarView><Hero/></NavBarView>} path='/home'/>
                <Route element={<NavBarView><AboutMe/></NavBarView>} path='/about'/>
                <Route element={<NavBarView><Contact/></NavBarView>} path='/contact'/>
                <Route element={<NavBarView><Hobbies/></NavBarView>} path='/hobbies'/>
                <Route element={<NavBarView><Projects/></NavBarView>} path='/projects'/>
                <Route element={<NavBarView><Blog/></NavBarView>} path='/blogs'/>
                <Route element={<SingleBlog/>} path='/blog'/>
            </Routes>
        </div>
    );
}

export default Main;
