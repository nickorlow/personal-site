import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from "./pages/Blog";

const Main = () => {
    return (
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Blog/>} path='/blog'/>
        </Routes>
    );
}

export default Main;