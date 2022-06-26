/* eslint-disable jsx-a11y/alt-text */
import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { ClothingData } from "../../StaticData/CardData";
import facebook from "../../assets/images/icon/footerImg/social-icon/facebook.png";
import email from "../../assets/images/icon/footerImg/social-icon/email.png";
import linkedin from "../../assets/images/icon/footerImg/social-icon/linkedins.png";
import twitter from "../../assets/images/icon/footerImg/social-icon/twitters.png";
import instagram from "../../assets/images/icon/footerImg/social-icon/instagram.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import "../../styles/components/swiperThum.css";
import "../../styles/components/swiperThum.scss";

// import required modules
import { Thumbs } from "swiper";

const ClothDetails = () => {
  const { clothID } = useParams();

  // const [thumbsSwiper, setThumbsSwiper] = useState();
  // const [activeThumb, setActiveThumb] = useState();

  const match = ClothingData.find((product) => product.id == clothID);

  return (
    <Fragment>
      <section className="bg-white max-w-screen-lg mx-auto py-10">
        <div className="flex flex-col items-center xl:flex-row">
          <div className="flex-1">
            <img src={match.img1} alt="" />

            {/* <Swiper
              loop={true}
              spaceBetween={10}
              modules={[Thumbs]}
              grabCursor={true}
              thumbs={{ swiper: activeThumb }}
              className="product-images-slider"
            >
              <SwiperSlide>
                <img src={match.img1} alt="product images" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={match.img2} alt="product images" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={match.img3} alt="product images" />
              </SwiperSlide>
            </Swiper> */}

            {/* <Swiper
              onSwiper={setActiveThumb}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              modules={[Thumbs]}
              className="product-images-slider-thumbs"
            >
              <SwiperSlide>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={match.img1} alt="product images" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={match.img2} alt="product images" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={match.img3} alt="product images" />
                </div>
              </SwiperSlide>
            </Swiper> */}

























            {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={match.img1} alt='product' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={match.img2} alt='product' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={match.img3} alt='product' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={match.img1} alt='product' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={match.img2} alt='product' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={match.img3} alt='product' />
        </SwiperSlide>
      </Swiper> */}
          </div>

          <div className="flex-1 flex flex-col items-start text-start space-y-1">
            <h1 className="text-3xl font-semibold">{match?.name}</h1>
            <h2 className="text-2xl font-sans font-semibold text-primary">
              ${match?.price}
            </h2>
            <p className="pt-7">{match.des}</p>
            <div className="space-y-5 pt-4 font-semibold text-[14px]">
              <h2>
                Movement:{" "}
                <span className="ml-14 text-gray-400">{match.movement}</span>
              </h2>
              <h2>
                Availability:{" "}
                <span className="ml-14 text-gray-400">
                  {match.availability}
                </span>
              </h2>
            </div>
            <div className="flex item-center space-x-4 py-4">
              <button className="text-white px-5 py-3 bg-stone-900 border-none rounded-none font-normal transform duration-500 hover:bg-primary">
                {" "}
                <FontAwesomeIcon icon={faCartArrowDown} /> Add to Cart
              </button>
              <button className="text-white px-5 py-3 bg-stone-900 border-none rounded-none font-normal transform duration-500 hover:bg-primary">
                Buy it Now
              </button>
            </div>
            <button className="text-white px-5 py-3 bg-stone-900 border-none rounded-none font-normal transform duration-500 hover:bg-primary w-full">
              {" "}
              <FontAwesomeIcon icon={faHeart} /> <span>Add to wishlist</span>{" "}
            </button>
            <div className="flex space-x-[4px] pt-4">
              <img src={facebook} alt="facebook" />
              <img src={email} alt="email" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ClothDetails;
