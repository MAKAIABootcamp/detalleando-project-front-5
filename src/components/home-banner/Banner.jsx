import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import present from "/girl-with-present.jfif"
import test from "/test.jfif"
import "./banner.scss"

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='swiper-banner'>
            <h1>Regala felicidad a los que amas</h1>
            <img src={present} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-banner'>
            <h1>Regala felicidad a los que amas</h1>
            <img src={test} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-banner'>
            <h1>Regala felicidad a los que amas</h1>
            <img src={test} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default Banner