import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/navigation";
import WhatWeDo from "./Components/What We Do/WhatWeDo";
import AboutUs from "./Components/About Us/AboutUs";
import ContactUs from "./Components/contact";
import Footer from "./Components/Footer/footer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function app() {
    return ( 
        <div className="app">
    {/* // <BrowserRouter> */}
    <Navigation/>
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/WhatWeDo" element={<WhatWeDo />} />
            <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
    <Footer />
        </div>
    // </BrowserRouter>
);
}
export default app;

