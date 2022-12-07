import React from 'react';
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import m1 from "./img/m1.jpg"
import m2 from "./img/m2.jpg"
import m3 from "./img/m3.png"
import m4 from "./img/m4.jpg";
import m5 from "./img/m5.png";
import 'swiper/css';
const Portfolio = () => {
  return (
<>
<div className="ourportpholio" id='portfolio'>
    <span>Recent Project</span>
    <span>Portpholio</span>
    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    autoplay={true}
    loop={true}
    className="ourportpholio-slider"
    >
        <SwiperSlide>
            <img src={m1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={m2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={m3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={m4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={m5} alt="" />
        </SwiperSlide>
    </Swiper>
</div>


</>
  )
}

export default Portfolio