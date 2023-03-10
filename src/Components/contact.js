import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImage from '../Assests/contact-image.jpeg';
import FounderVector from '../Assests/founderImage.jpeg';
import ContactVector from '../Assests/FounderContactImage.jpeg';
import WebSiteVector from '../Assests/webSiteImage.jpeg';
import AOS from "aos";
import 'aos/dist/aos.css'; 

AOS.init();

const contactUs = () => {
    return(
        <>
         <div className="container" id="ContactUs" style={{padding:"0"}}>
        <div className="wrapper" style={{height:"5%"}}>
        <h2  style={{textAlign:"Center", color:"#554B34", fontWeight:"bold", textShadow:"1px 1px 1px #554B34", fontSize:"3rem", padding:"12%"}}  data-aos="zoom-in" data-aos-duration="1000">Contact Us</h2>
          <div className="form">
            <div className="left-col">
              
              <h2 >Veebeee</h2>
              <br />
              <div className="bull">
                {/* <p>BuJo Guide</p> */}
                {/* <img src={ContactImage} className="img2" alt=""  /> */}
                <div className="contact-content" style={{color:"#D2C3B2"}}>
                  {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"left"}}> */}
                {/* <h4 style={{textAlign:"Left"}}>Veebeee</h4> */}
                {/* <br /> */}
                <h4 style={{textAlign:"center", textDecoration:"underLine"}}>Ahmedabad - Delhi - Mumbai</h4>
                {/* </div> */}
                <br />
                <div className="contact_founder" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                  <img src={FounderVector} alt="" style={{height:"35px", width:"35px", margin:"2.5%"}} />
                  <div className="founder_names" style={{display:"flex", flexDirection:"column", marginLeft:"2.25%"}}>
                  <h5>Vaidehi Shah</h5>
                  <h5>Vivek Kankaria</h5>
                </div>
                </div>
                <br />
                <div className="contact_call" style={{display:"flex", flexDirection:"row", justifyContent:"left"}}>
                <img src={ContactVector} alt="" style={{height:"35px", width:"35px", margin:"2.5%"}} />
                <div className="founder_contact" style={{display:"flex", flexDirection:"column", marginLeft:"2.5%"}}>
                <h5>9712970063</h5>
                <h5>
                99133 82221
                </h5>
                </div>
                </div>
                <br />
                <div className="contact_webSite"style={{display:"flex", flexDirection:"row", justifyContent:"left"}}>
                <img src={WebSiteVector} alt="" style={{height:"35px", width:"35px", margin:"2.5%"}} />
                <h5 style={{margin:"1.5%", padding:"2.5%"}}><a href="#">admin@veebeee.co</a></h5>
                </div>
                </div>
              </div>
              
            </div>
            <div className="right-col">
              <h2>Get In Touch</h2>
              <form>
                <div className="result" />
                <div className="form-group">
                  <input id="name" type="text" placeholder="enter your name" />
                </div>
                <div className="form-group">
                  <input id="email" type="email" placeholder="enter your email" />
                </div>
                <div className="form-group">
                  <input id="message" type="text" placeholder="enter your phone number" />
                </div>
                <button id="submit" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
        
        
        </>
    )
}
export default contactUs;