/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// banner image
import clothings from "../../assets/images/banner/banner2.webp";
import fashion from "../../assets/images/banner/banner1.webp";
import accesories from "../../assets/images/banner/banner3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/components/banner.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <Fragment>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div>
              <h1>Top Trending </h1>
              <h2>Clothings</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, rerum consequatur ipsam facere aliquam cum ea expedita
                mollitia accusamus, delectus animi nulla minus cumque beatae
                recusandae ullam ab eligendi tempore!
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <h1>Top Trending </h1>
              <h2>Clothings</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, rerum consequatur ipsam facere aliquam cum ea expedita
                mollitia accusamus, delectus animi nulla minus cumque beatae
                recusandae ullam ab eligendi tempore!
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </Fragment>
  );
};

export default Banner;
