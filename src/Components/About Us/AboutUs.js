import React from "react";
import './AboutUs.css';
import ImageAbout from "../../Assests/About-image.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
// import styled, { keyframes } from 'styled-components';
// import { fadeInRight, fadeInLeft } from "react-animations";

//   const fadeInRightAnimation = keyframes`${fadeInRight}`;
//   const fadeInRightAnimation = styled.div`animation:3s ${keyframes `${fadeInRight}`}` ;
const about = () => {
    return(
        <>
            <div className="about-container" id="AboutUs" style={{height:"100%", padding:"5%"}}>
                <h1 className="about-header" align="center" data-aos="zoom-in" data-aos-duration="1000">
                    <span>A</span>bout Us
                </h1>
                <div className="about-items" style={{marginTop:"5.5%"}} >
                    {/* <img src={ImageAbout} height="200px" width="200px"/> */}
                    <div className="about-content" >
                    <p data-aos="fade-left" data-aos-duration="1000" >
                    'VEEBEEE' is a communications consultancy that works closely with a host
                    of industries like FMCG, hospitality, retail, infrastructure, luxury, media,
                    publishing, social entrepreneurship and art.
                    {/* </p>
                    
                    <p> */}
                     We create media friendly content that is easily amplified. Our battery of
                    experts and think tank devises strategy for holistic communication. 
                    {/* </p>
                    
                    <p> */}
                    Veebeee, is a congregation of seasoned voices with inimitable expertise in
                    their respective fields.
                    </p>
                    
                    </div>
                    
                    
                    <div className="about-image" data-aos="fade-right" data-aos-duration="1000">
                    <img src={ImageAbout} height="250px" width="250px" alt="" className="aboutImage"/>
                    </div>
                    

                </div>
            </div>
        </>
    )
}
export default about;