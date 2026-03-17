import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import woman from "../assets/woman.webp";
import dior from "../assets/dior.png";
import gucci from "../assets/gucci.png";
import chanel from "../assets/chanel.png";
import hermes from "../assets/hermes.png";
import goyard from "../assets/goyard.png";
import loui from "../assets/loui.png";

const Section2 = () => {
  const brands = [dior, gucci, chanel, hermes, goyard, loui];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[80px] xl:px-[120px] py-14 md:py-24 max-w-[1600px] mx-auto w-full flex flex-col items-center">
      {/* HEADER */}
      <div>
        <h1 className="font-playfair text-center text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
          Inspired By Top Designer Brands
        </h1>

        <p className="text-[13px] sm:text-[16px] md:text-[18px] text-[#1E1E1E] text-center font-light mt-2 max-w-[700px] mx-auto">
          We curate genuine designer-inspired pieces, each bag is verified and
          photographed before listing.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="w-full mt-10 md:mt-[60px]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          md:spaceBetween={60}
          loop={true}
          loopAdditionalSlides={brands.length}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
        >
          {[...brands, ...brands].map((logo, index) => (
            <SwiperSlide key={index} className="!w-auto flex items-center">
              <img
                src={logo}
                className="h-[40px] sm:h-[50px] md:h-[60px] object-contain opacity-80 hover:opacity-100 transition"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* IMAGE + TEXT SECTION */}
      <div
        className="
        w-full
        flex
        flex-col
        lg:flex-row
        items-center
        gap-10
        lg:gap-[80px]
        mt-16
        md:mt-[120px]
      "
      >
        {/* IMAGE */}
        <div className="w-full lg:w-[55%]">
          <img
            src={woman}
            className="w-full h-auto rounded-lg object-cover"
            alt=""
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-[45%] flex flex-col gap-3 text-center lg:text-left">
          <span className="text-[#E58411] text-[14px] sm:text-[16px]">
            WHO WE ARE
          </span>

          <h1
            className="
            font-playfair
            font-bold
            text-[24px]
            sm:text-[20px]
            md:text-[25px] 
            lg:text-[20px]
            xl:text-[36px]
            leading-tight
          "
          >
            The Ultimate Thrift <br className="hidden xl:block" />
            Styling Experience
          </h1>

          <p
            className="
            text-[14px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[13px]
            text-[#1E1E1E]
            font-light
            leading-[22px]
            sm:leading-[24px]
            md:leading-[22px]
          "
          >
            A&O essentials offers carefully chosen, designer-inspired handbags
            built for everyday style and value. Each listing includes detailed
            photos, materials, and condition notes so you know exactly what
            you’re buying. We ship from the U.S.
          </p>

          <button
            className="
            mt-4
            lg:mt-1
            xl:mt-4
            px-6
            lg:py-2
            py-3
            xl:py-3
            bg-[#F6973F]
            w-full
            sm:w-auto
            max-w-[320px]
            mx-auto lg:mx-0
            rounded-[8px]
            text-white
            font-semibold
          "
          >
            View New Arrivals on Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
