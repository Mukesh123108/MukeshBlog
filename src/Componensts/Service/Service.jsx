import React from 'react';
import "./Service.css";
import Heartemoji from "./img/cool.png";
import happy from "./img/download.png";
import cool from "./img/cool.png";
import Card from '../Card/Card';
import { motion } from "framer-motion"
const Service = () => {
        const tarsition={duration:1, type:"Springs"}
  return (
   <>
    <div className="service" id='service'>
        <div className="asome">
            <span>What is Lorem Ipsum? </span>
            <span>Services</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <button className="button s-button">Download CV</button>
            <div className="blur-1 s-blure" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div  whileInView={{left:"14rem"}}
        initial={{left:"25%"}}
        tarsition={tarsition} className="cards" >
        <div style={{left:"14rem"}}>
                <Card 
                emoji={Heartemoji}
                heading={"Design"}
                deatil={"Photoshop, Figama, Sketch, Adobe, Adobe Xd"}
                />
               
        </div>
        <div style={{top:"12rem",left:"-4rem"}}>
               
                <Card 
                emoji={happy}
                heading={"Devloper"}
                deatil={"HTML, Javascript, CSS, Jquery, React"}
                />
        </div>
        <div style={{top:"19rem",left:"12rem"}}>
               
                <Card 
                emoji={cool}
                heading={"Ui UX"}
                deatil={"Lorem Ipsum is simply dummy text of"}
                />
        </div>
        <div className="cpurpele  blure" style={{ background:"rgb(233 16 190 / 28%)"}}></div>
        <div className=" skyblue blure" style={{ background:"#C1F5FF"}}></div>
        </div>
    </div>
   </>
  )
}

export default Service