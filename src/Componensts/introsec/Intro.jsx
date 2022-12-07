import React from 'react'
import "./Intro.css";
import git from "./img/github.png";
import face from "./img/facebook.png";
import insta from "./img/instagram.png";
import into from "./img/png.png";
import { motion } from "framer-motion"
const Intro = () => {
  const tarsition={duration:2, type:"Springs"}
  return (
    <>
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hye! Am </span>
                <span>Mukesh Kumar</span>
                <span>Hye i am WebDeloper</span>
            </div>
            <button className="i-button button">Hire me</button>
            <div className='i-icon'>
            <img src={git}/>
            <img src={face}/>
            <img src={insta}/>
            </div>
           
        </div>
        <div className="i-right">
        <motion.img
        initial={{left:"-36%"}}
       
        transition={tarsition}
        
        src={into}/>
        </div>
        <div className="  blure" style={{ background:"rgb(233 16 190 / 28%)"}}></div>
        <div className="  blure" style={{ background:"#C1F5FF",top:"17rem",width:"21rem,",height:"11rem",left:"-9rem"}}></div>
    </div>
    </>
  )
}

export default Intro