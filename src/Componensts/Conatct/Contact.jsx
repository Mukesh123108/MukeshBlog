import React from 'react'
import "./Conatct.css"

const Contact = () => {
  return (
    <>
         <div className="contact" id='contact'>
            <div className="c-left">
                <div className="asome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className="cpurpele  blure" style={{ background:"rgb(233 16 190 / 28%)"}}></div>
                </div>
            </div>
            <div className="t-right">
                <form action="">
                    <input type="text" name="user" id=""  placeholder='User name'/>
                    <input type="text" name="user" id=""  placeholder='Conatct No'/>
                    <input type="text" name="user" id=""  placeholder='E-mail'/>
                    <textarea placeholder='Enter Message' ></textarea>
                    <button  className='button s-button'>Submit</button>
                   
                </form>
                <div className=" skyblue blure" style={{ background:"#C1F5FF"}}></div>
            </div>
         </div>

    </>
  )
}

export default Contact