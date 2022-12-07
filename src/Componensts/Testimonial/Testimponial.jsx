import React from 'react'
import "./Testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination} from "swiper";
import "swiper/css/pagination";
import m5 from "./img/user.png";
const Testimponial = () => {
    const Clints= [
        {
           img:m5,
            cname:"Vinod",
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
        {
            img:m5,
            cname:"Mukesh",
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
        {
            img:m5,
            cname:"Shiva",
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
    ]
  return (
    <>
       <div className="t-waper" id='testimonial'>
            <div className="theding">
                <span>Clintes will get</span>
                <span>Expetional Work</span>
                <span>From Me......</span>
                <div className="cpurpele  blure" style={{ background:"rgb(233 16 190 / 28%)"}}></div>
                <div className=" skyblue blure" style={{ background:"#C1F5FF"}}></div>
            </div>
           
                <Swiper
                modules={[Pagination]}
                 slidesPerView={1}
                 pagination={{clickable:true}}
                className="swiper">
                    {
                        Clints.map((crentVal,index)=>{
                            return(
                               
                                <SwiperSlide className='swip-slider' key={index}>
                                     <div className="innertesti">
                                        <img src={crentVal.img} alt="" />
                                    <span>{crentVal.cname}</span>
                                    <span>{crentVal.review}</span>
                                    </div>
                                </SwiperSlide>
                               
                            )
                        })
                    }
                </Swiper>
            
       </div>
    </>
  )
}

export default Testimponial