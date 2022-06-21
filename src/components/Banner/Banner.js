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
          <div
            style={{
              background: `url(${fashion})`,
            }}
            className="bg-no-repeat h-screen bg-cover bg-center"
          >
            <div className="">
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
          <section
            className="flex items-center bg-no-repeat w-full h-screen bg-center bg-cover"
            style={{
              background: `url(${accesories})`,
            }}
          >
            <div className="w-1/12">&nbsp;</div>
            <div className="w-[55%]">
              <div className="relative text-2xl">
                <span className="absolute flex w-full h-0.5 -ml-4 bg-purple -left-full top-1/2"></span>
                Top Trending
              </div>

              <h2 className="text-5xl font-semibold py-3">Clothings</h2>
              <p className="py-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                aliquid laborum, soluta debitis eaque nisi! Ipsam repellat
                reprehenderit aliquid, asperiores a debitis possimus
                exercitationem quaerat vero, voluptates voluptatibus aspernatur
                iusto!
              </p>

              <button className="btn bg-[#367e9be7] border-0 rounded-none px-8 py hover:bg-primary">
                Shop Now
              </button>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default Banner;
