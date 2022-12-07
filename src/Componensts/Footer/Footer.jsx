import React from 'react';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import "./Footer.css";
import foot from "./img/wave.png";
const Footer = () => {
  return (
    <>
        <div className="footer">
            <img src={foot} alt="" style={{width:"100%"}} />
            <div className="footer-contant">
                <span>mukeshmaurya@gmail.com</span>
                <div className="footicon">
                   
                    <Insta color="white" size="3rem"/>
                    <Facebook color="white" size="3rem"/>
                    <Github color="white" size="3rem"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer