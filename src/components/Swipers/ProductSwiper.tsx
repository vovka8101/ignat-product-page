import { EffectFade, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import type TSwiper from 'swiper';

import img1 from "../../assets/images/product-img-1.png"
import img2 from "../../assets/images/product-img-2.png"
import img3 from "../../assets/images/product-img-3.png"
import img4 from "../../assets/images/product-img-4.png"
import img5 from "../../assets/images/product-img-5.png"
import img6 from "../../assets/images/product-img-6.png"

import 'swiper/scss'
import 'swiper/scss/effect-fade'
import { useState } from 'react';

export const ProductSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);

  return (
    <>
      <Swiper
        modules={[EffectFade, Thumbs]}
        effect="fade"
        initialSlide={1}
        loop={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="product-main-swiper"
      >
        <SwiperSlide className="product-swiper-slide-main">
          <div className="main-img-container">
            <img
              src={img1}
              className="main-img"
              alt="Product"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="product-swiper-slide-main">
          <div className="main-img-container">
            <img
              src={img2}
              className="main-img"
              alt="Product"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="product-swiper-slide-main">
          <div className="main-img-container">
            <img
              src={img3}
              className="main-img"
              alt="Product"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={3}
        modules={[Thumbs]}
        className="product-thumb-swiper"
      >
        <SwiperSlide className="product-swiper-slide-thumb">
          <div className="thumb-img-container">
            <img
              src={img4}
              className="thumb-img"
              alt="Product"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="product-swiper-slide-thumb">
          <div className="thumb-img-container">
            <img
              src={img5}
              className="thumb-img"
              alt="Product"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="product-swiper-slide-thumb">
          <div className="thumb-img-container">
            <img
              src={img6}
              className="thumb-img"
              alt="Product"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
