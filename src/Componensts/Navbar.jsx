import React from 'react';
import "./Navbar.css"
import {Link}  from 'react-scroll';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="left-s">
            <div className="n-Name">Mukesh</div>
           
        </div>
        <div className="left-r">
            <div className="nlist">
                <ul style={{listStyleType:"none"}}>
                    <Link spy={true} to={Navbar} smooth={true}  activeClass="activeClass">
                    <li>Home</li>  
                    </Link>
                    <Link spy={true} to="service" smooth={true}>                 
                    <li>Service</li>
                    </Link>
                    <Link spy={true} to="experiance" smooth={true}>
                    <li>Experiance</li>
                    </Link>
                    <Link spy={true} to="portfolio" smooth={true}>
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to="testimonial" smooth={true}>
                    <li>Testimonial</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to="contact" smooth={true}>
            <button className="button n-button">Contact</button>
            </Link>
        </div>
        </div> 
    </>
  )
}

export default Navbar