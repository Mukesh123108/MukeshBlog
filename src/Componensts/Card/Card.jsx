import React from 'react';
import "./Card.css";


const Card = (Props) => {
  return (
    <>
    <div className="card">
        <img src={Props.emoji} alt="" />
        <span>{Props.heading}</span>
        <span>{Props.deatil}</span>
        <button className="c-card">Learn More</button>
    </div>
    </>
  )
}

export default Card