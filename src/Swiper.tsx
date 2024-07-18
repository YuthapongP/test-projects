import React from "react";
import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
  Autoplay,
  A11y,
} from "swiper/modules";
import "./SwiperComponent.css";
import "swiper/css/autoplay";

import "/Users/mbs/personal-projects/test12/node_modules/swiper/swiper-bundle.min.css";

export default function SwiperComponent(props) {
  const { children, reverse = false, delay = 3000 } = props;
  return (
    <Swiper
      className="swiperComponent"
      //   freeMode={true}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      slidesPerView={5}
      spaceBetween={50}
      speed={500}
      style={{
        zIndex: 99,
      }}
      // navigation
      //   onNavigationNext={true}
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {children}
    </Swiper>
  );
}
