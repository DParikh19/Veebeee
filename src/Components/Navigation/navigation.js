import React,{useEffect, useState} from "react";
// import './navigation.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Home from '../Home/Home';
import AboutUs from '../About Us/AboutUs';
import WhatWeDo from '../What We Do/WhatWeDo';
import ContactUs from '../contact';
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  const [active, setActive] = useState("navMenu");
  const [toggleIcon, setToggleIcon] = useState("navToggler");
  const navToggle = () => {
    active === "navMenu" 
      ? setActive("navMenu navActive") 
      : setActive("navMenu");

      toggleIcon === 'navToggler'
      ?setToggleIcon('navToggler toggle')
      :setToggleIcon('navToggler')
  }
  // const NavBar = () => {
  //   const [colorChange, setColorChange] = useState(false);
  //   const changeNavBarColor = () => {
  //     if(window.scrollY >= 100){
  //       setColorChange(true);
  //     }
  //     else{
  //       setColorChange(false);
  //     }
  //   }
  // };
  // window.addEventListener('scroll', changeNavBarColor);
  // const [scrolled, setScrolled] = useState(false);
  // const handleScroll=() => {
  //   const offset=window.scrollY;
  //   if(offset >= 500){
  //     setScrolled(true);
  //   }
  //   else {
  //     setScrolled(false);
  //   }
  // }

  // useEffect( () => {
  //   window.addEventListener('scroll'.handleScroll)
  // })
  // let navbarClasses = ['navbar'];
  // if(scrolled) {
  //   navbarClasses.push('scrolled');
  // }
    return (
        <>
           <nav className="nav" style={{position:"sticky", top:0}}>
            <a href="/" className="navBrand"> VEEBEEE</a>
            <ul className={active}>
              <li className="navItem"><a href="/" className="navLink">Home</a></li>
              <li className="navItem"><a href="#whatWeDo" className="navLink">What We Do</a></li>
              <li className="navItem"><a href="#AboutUs" className="navLink">About Us</a></li>
              <li className="navItem"><a href="#ContactUs" className="navLink">Contact Us</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
           </nav>

        </>   
    ) 
}
export default Navbar;