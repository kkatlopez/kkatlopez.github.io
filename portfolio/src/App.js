import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Navigation from './components/navigation.js';
import Home from './components/home.js';
import Experience from './components/experience/experience.js';
import AboutMe from './components/about-me/about-me.js';
import SLAP from './components/projects/slap.js';
import 'react-image-lightbox/style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/experience" element={<Experience/>}></Route>
            <Route path="/about-me" element={<AboutMe/>}></Route>
            <Route path="/projects/slap" element={<SLAP/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
