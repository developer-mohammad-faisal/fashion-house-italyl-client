import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/components/banner.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const Banner = () => {
  return (
    <Fragment>

          <h1 className="text-4xl text-center" >Banner</h1>

      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >

          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>

      </Swiper> */}
    </Fragment>
  );
};

export default Banner;

