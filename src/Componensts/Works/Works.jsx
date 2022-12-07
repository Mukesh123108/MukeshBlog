import React from 'react';
import "./Works.css"
import amaz from "./img/amzone.png"
import face from "./img/face.png"
import fiv from "./img/fiv.png"
import shopy from "./img/shopy.png"
import upwork from "./img/upwork.png";


const Works = () => {
  return (
   <>
    <div className="work">
    <div className="asome">
            <span>Work for All these </span>
            <span>Brand & Clinte</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <button className="button s-button">Hire Me</button>
            <div className="blur-1 s-blure" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="m-right">
            <div className="m-curcle">
                <div className="sectioncurcle">
                    <img src={upwork} alt="" />
                </div>
                <div className="sectioncurcle">
                    <img src={shopy} alt="" />
                </div>
                <div className="sectioncurcle">
                    <img src={fiv} alt="" />
                </div>
                <div className="sectioncurcle">
                    <img src={face} alt="" />
                </div>
                <div className="sectioncurcle">
                    <img src={amaz} alt="" />
                </div>
            </div>
            <div className="wbackcurcle blue">

            </div>
            <div className="wbackcurcle yellow">

</div>
        </div>
    </div>
   </>
  )
}

export default Works