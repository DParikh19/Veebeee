import React from "react";
import Icon1 from "../../Assests/wwd-icon-1.png";
import Icon2 from "../../Assests/wwd-icon-2.png";
import Icon3 from "../../Assests/wwd-icon-3.png";
// import DummyImage from "../../Assests/dummyImage.jpg";
// import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';
// import { Row, Col} from "react-bootstrap";
// import { fadeOut } from "react-animations";
import AOS from "aos";
import 'aos/dist/aos.css'; 

AOS.init();

const WhatWeDo = () => {
    return (
        <>
        
        <div className="wwd-container" id="whatWeDo" style={{backgroundColor:"#f0ece5", padding:"0%"}}>
          <div className="wwd-title">
            <h1 style={{textAlign:"Center", color:"#554B34", fontWeight:"bold", textShadow:"1px 1px 1px #554B34", padding:"5.5%"}} data-aos="zoom-in" data-aos-duration="1000" >What We Do</h1>
          </div>
          <div className="wwd-card-container" style={{display:"flex",
                                                      flexDirection:"row", 
                                                      justifyContent:"center", 
                                                      flexWrap:"wrap",
                                                      alignItems:"center", 
                                                      alignContent:"space-between",
                                                      padding:"0%"
                                                     }} >
          <section id="service">
        <div className="container">
          
          <div className="row">
            {/*START SINGLE SERVICE AREA*/}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="single_service hvr-curl-center"  >
                <div className="single_service-left" >
                  <div className="icon">
                    {/* <i className="fa fa-laptop" /> */}
                    <img src={Icon2} alt="this is icon 2"/>
                  </div>
                </div>
                <div className="single_service-body">
                  <h4 className="single_service-heading">Digital Content Creation</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                                      elit. Aenean commodo ligula.</p>
                </div>
              </div>
              {/* style={{height:"200px", width:"325px"}} */}
            </div>{/*/END SINGLE SERVICE AREA*/}
            {/*START SINGLE SERVICE AREA*/}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="single_service hvr-curl-top-right" 
              >
                
                <div className="single_service-left">
                  <div className="icon">
                    {/* <i className="fas fa-quidditch" /> */}
                    <img src={Icon2} alt="this is icon 2"/>
                  </div>
                </div>
                <div className="single_service-body">
                  <h4 className="single_service-heading">Social Media Management</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
                </div>
              </div>
            </div>{/*/END SINGLE SERVICE AREA*/}
            {/*START SINGLE SERVICE AREA*/}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="single_service hvr-curl-top-right" >
                <div className="single_service-left">
                  <div className="icon">
                    {/* <i className="fas fa-newspaper" /> */}
                    <img src={Icon3} alt="this is icon 2"/>
                  </div>
                </div>
                <div className="single_service-body">
                  <h4 className="single_service-heading">Strategy And Counsel</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                               elit. Aenean commodo ligula.</p>
                </div>
              </div>
            </div>{/*/END SINGLE SERVICE AREA*/}
            {/*START SINGLE SERVICE AREA*/}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="single_service hvr-curl-top-right">
                <div className="single_service-left">
                  <div className="icon">
                    {/* <i className="fas fa-smile" /> */}
                    <img src={Icon2} alt="this is icon 2"/>
                  </div>
                </div>
                <div className="single_service-body">
                  <h4 className="single_service-heading">Media Relations</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                                   elit. Aenean commodo ligula.</p>
                </div>
              </div>
            </div>{/*/END SINGLE SERVICE AREA*/}
            {/*START SINGLE SERVICE AREA*/}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="single_service hvr-curl-top-right" >
                <div className="single_service-left">
                  <div className="icon">
                    {/* <i className="fa fa-crop" /> */}
                    <img src={Icon1} alt="this is icon 2"/>
                  </div>
                </div>
                <div className="single_service-body">
                  <h4 className="single_service-heading">Speaker Opportunities</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                            elit. Aenean commodo ligula.</p>
                </div>
              </div>
            </div>{/*/END SINGLE SERVICE AREA*/}
            {/*START SINGLE SERVICE AREA*/}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="single_service hvr-curl-top-right" >
                <div className="single_service-left">
                  <div className="icon">
                    {/* <i className="fa fa-cogs" /> */}
                    <img src={Icon2} alt="this is icon 2"/>
                  </div>
                </div>
                <div className="single_service-body">
                  <h4 className="single_service-heading">Influencer Marketing</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                                       elit. Aenean commodo ligula.</p>
                </div>
              </div>
            </div>{/*/END SINGLE SERVICE AREA*/}
          </div>
        </div>
      </section>
        </div>
        </div>

        </>
    )
}
export default WhatWeDo;