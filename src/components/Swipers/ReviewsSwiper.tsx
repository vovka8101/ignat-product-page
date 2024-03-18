import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import TSwiper from 'swiper';
import { TReviews } from '../../types/app.types'
import ava from "../../assets/images/ava.png"
import { useRef, useState } from 'react'
import arrowLeft from "../../assets/images/icons/arrow-left.png"
import arrowRight from "../../assets/images/icons/arrow-right.png"

import 'swiper/scss'
import 'swiper/scss/navigation';
import { useSlidesAmount } from '../../hooks/useSlidesAmount';

type ReviewsSwiperProps = {
  reviews: TReviews[]
}

export const ReviewsSwiper = ({ reviews }: ReviewsSwiperProps) => {
  const swiperRef = useRef<SwiperRef>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const slidesAmount = useSlidesAmount()

  const handleSlideChange = (swiper: TSwiper) => {
    setCurrentPage(swiper.snapIndex + 1);
  }

  const getPageNumber = (page: number) => {
    return page.toString().padStart(2, '0')
  }

  const getTotalPages = () => {
    return Math.ceil((reviews.length + 1) / slidesAmount).toString().padStart(2, '0')
  }

  return (
    <div className="reviews__content">
      <div className="swiper-navigation">
        <span className="page-number">
          {getPageNumber(currentPage)} / {getTotalPages()}
        </span>
        <div className="swiper-nav-btns">
          <button
            className="prev-slide-btn slide-btn"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            disabled={currentPage === 1}
          >
            <img src={arrowLeft} alt="Arrow Left" className="arrow-img" />
          </button>
          <button
            className="next-slide-btn slide-btn"
            onClick={() => swiperRef.current?.swiper.slideNext()}
            disabled={currentPage === Math.ceil((reviews.length + 1) / slidesAmount)}
          >
            <img src={arrowRight} alt="Arrow Right" className="arrow-img" />
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{ prevEl: "prev-slide-btn", nextEl: "next-slide-btn" }}
        slidesPerView={slidesAmount}
        slidesPerGroup={slidesAmount}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="reviews-swiper"
      >
        <SwiperSlide className="slide-plus card">
          <span className="plus"></span>
        </SwiperSlide>
        {reviews.map(review => (
          <SwiperSlide key={review.id} className="card">
            <div className="card__top">
              <img src={ava} alt="Avatar" className="card__img" />
              <div className="author">
                <div className={`stars stars--${review.stars}`}>
                  {Array.from(Array(5).keys()).map(key => (
                    <span key={key} className="stars__star"></span>
                  ))}
                </div>
                <h5 className="author__name">{review.author}</h5>
              </div>
            </div>
            <div className="card__bottom">
              <p className="card__text">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
