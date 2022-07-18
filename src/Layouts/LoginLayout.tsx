import React from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

import SlideImg1 from "../Images/LoginSlideImg.png";

import "swiper/css";
import "swiper/css/pagination";

import { StyledLoginLayout } from ".";

export const LoginLayout = () => {
  return (
    <StyledLoginLayout>
      <div className="side_backgroung">
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="login_swiper"
        >
          <SwiperSlide>
            <div className="login_swiper_slide">
              <img src={SlideImg1} alt="computer" />
              <h2>HeliumPay</h2>
              <p>Escrow service for businesses accepting and paying out cryptocurrency</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="login_swiper_slide">
            <div className="login_swiper_slide">
              <img src={SlideImg1} alt="computer" />
              <h2>HeliumPay</h2>
              <p>Welcome to HeliumPay</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="login_swiper_slide">
            <div className="login_swiper_slide">
              <img src={SlideImg1} alt="computer" />
              <h2>HeliumPay</h2>
              <p>Escrow service for businesses accepting and paying out cryptocurrency</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </StyledLoginLayout>
  );
};
