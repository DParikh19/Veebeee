import React from 'react';
import './Home.css';
import image from '../../Assests/Background-image.png'; 
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import "../../index";
// import BackgroundImageHome from '../../Assests/Background-image.png';
// import HomeImage from '../../Assests/Home-background-image.jpeg';
import BgImage from '../../Assests/bgImage.jpeg';
import WhatWeDo from '../What We Do/WhatWeDo';
import AboutUs from '../About Us/AboutUs';
import ContactUs from '../contact';

const Bounce = styled.div`animation:4s ${keyframes `${bounce}`} 1` ;
const home = () => {
    return(
        <>
        {/* <section className="container"> */}
        <div className="bg-image"></div>
        <div className="bg-text" style={{backgroundImage:`url(${BgImage})`,
                                         backgroundRepeat:"no-repeat", 
                                         backgroundPosition:"center",
                                         backgroundSize:"cover",
                                         height:"600px",
                                         opacity:0.9,
                                         backdropFilter:"blur(30px)" }}>
        <div className="container">
            <div className="row">
                
                <div className="col-sm-12 text-center" >
                   <Bounce> <h1 className="animate-charcter" style={{fontWeight:"bold", color:"#2c2111",textShadow:"2px 4px 4px #2c2111"}}>Veebeee Communication Dossier</h1> </Bounce>
                </div>
                
            </div>
        </div>
        </div>
                
        {/* </section> */}
        {/* <section> */}
        <WhatWeDo />
        {/* </section> */}
        {/* <section> */}
        <AboutUs />
        {/* </section> */}
        {/* <section >    */}
        <ContactUs />
        {/* </section> */}
        </>
    )
}




// About Us Section

export default home;
