import React, { Fragment } from "react";

// banner image
import clothings from "../../assets/images/banner/banner2.webp";
import fashion from "../../assets/images/banner/banner1.webp";
import accesories from "../../assets/images/banner/banner3.webp";
// swiper js code
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";
const Banner = () => {
  return (
    <div className=" h-[250px] w-full md:h-[425px] mb-10 ">
      {/* hello */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[250px] md:h-[425px] mb-10">
        {" "}
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${accesories})` }} className="bg-no-repeat h-full w-full bg-cover bg-center  ">
            <div className="pl-0 md:pl-16 w-full md:w-1/2 md:bg-transparent bg-[#e0e2ebad]  flex items-center md:items-start justify-center h-full flex-col ">
              <h1 className="text-lg md:text-2xl text-gray-700">Top Trending</h1>
              <h1 className="text-4xl md:text-6xl my-2 md:my-3 font-bold text-[#1B3C7A]">
                <span className="md:hidden">Men's Clothes</span>
                <span className="hidden md:block">Clothings</span>
              </h1>
              <p className="text-gray-600 hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium voluptates optio aspernatur a{" "}
              </p>
              <button className="bg-[#1B3C7A] hover:bg-primary transition-all duration-500 ease-in-out font-semibold text-lg md:mt-5 mt-2 text-white py-3 px-8">
                Shop Now
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${fashion})` }} className="bg-no-repeat bg-cover bg-center w-full   h-full">
            <div className="flex h-full">
              <div className="w-1/2 hidden md:block"></div>
              <div className="w-full md:w-1/2 md:bg-transparent bg-[#ffffff8e]  flex md:items-start items-center justify-center h-[100%] flex-col ">
                <h1 className="text-lg md:text-2xl text-gray-700">New Collections</h1>
                <div className="text-3xl flex flex-row lg:flex-col gap-3 lg:text-6xl my-1 md:my-4  font-bold text-[#983441]">
                  <p> Women's </p> <p>Fashion</p>
                </div>
                <p className="text-gray-600 hidden md:block pr-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium voluptates optio aspernatur a{" "}
                </p>
                <button className="bg-[#983441] hover:bg-primary transition-all duration-500 ease-in-out text-lg font-semibold mt-2 md:mt-5 text-white py-3 px-8">
                  Shop Now
                </button>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${clothings})` }} className="bg-no-repeat bg-cover  bg-center bg-origin-padding w-full   h-full ">
            <div className="pl-0 md:pl-16 w-full md:w-1/2 md:bg-transparent bg-[#e0e2ebad]  flex items-center md:items-start justify-center h-full flex-col ">
              <h1 className="text-lg md:text-2xl text-gray-700">New Arrivals</h1>
              <h1 className="text-4xl md:text-6xl my-2 md:my-3 font-bold text-[#BC5525]">
                <span className="md:hidden">Latest Products</span>
                <span className="hidden md:block">Accessories</span>
              </h1>
              <p className="text-gray-600 hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium voluptates optio aspernatur a{" "}
              </p>
              <button className="bg-[#F0E5D2] text-lg hover:bg-primary transition-all duration-500 ease-in-out font-semibold md:mt-5 mt-2 text-black py-3 px-8">
                Shop Now
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
