import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

const Main = () => {
    return (
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Blog/>} path='/blogs'/>
            <Route element={<SingleBlog/>} path='/blog'/>
        </Routes>
    );
}

export default Main;