import React from "react";
import { motion } from "framer-motion";

import woman from "../assets/woman.webp";
import dior from "../assets/dior.png";
import gucci from "../assets/gucci.png";
import chanel from "../assets/chanel.png";
import hermes from "../assets/hermes.png";
import goyard from "../assets/goyard.png";
import loui from "../assets/loui.png";
import { instagramUrl } from "../contactLinks";

const Section2 = () => {
  const brands = [dior, gucci, chanel, hermes, goyard, loui];

  // 🔥 PARENT CONTROLS STAGGER
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // 👈 delay between image & text
      }
    }
  };

  // 🔽 IMAGE COMES FIRST
  const imageAnim = {
    hidden: { opacity: 0, y: 80, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // 🔽 TEXT COMES AFTER (naturally via stagger)
  const textAnim = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="
      px-4 sm:px-6 md:px-10 lg:px-[80px] xl:px-[120px]
      bg-white py-14 md:py-24
      max-w-[1600px] mx-auto w-full
      flex flex-col items-center
      overflow-x-hidden
    ">

      {/* HEADER */}
      <div className="w-full">
        <h1 className="font-playfair text-center text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
          Inspired By Top Designer Brands
        </h1>

        <p className="text-[13px] sm:text-[16px] md:text-[18px] text-[#1E1E1E] text-center font-light mt-2 max-w-[700px] mx-auto">
          We curate genuine designer-inspired pieces, each bag is verified and photographed before listing.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="w-full mt-10 md:mt-[60px] overflow-hidden relative">
        <div className="flex w-max animate-marquee gap-[40px]">
          {[...brands, ...brands].map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-[40px] sm:h-[50px] md:h-[60px] object-contain opacity-80 hover:opacity-100 transition"
              alt=""
            />
          ))}
        </div>
      </div>

      {/* 🔥 STAGGERED SECTION */}
      <motion.div
        className="
          w-full
          flex flex-col lg:flex-row
          items-center
          gap-10 lg:gap-[80px]
          mt-16 md:mt-[120px]
          min-h-[500px]
        "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.25,
          margin: "0px 0px -80px 0px"
        }}
      >

        {/* IMAGE */}
        <motion.div
          variants={imageAnim}
          className="w-full lg:w-[55%]"
        >
          <img
            src={woman}
            className="w-full h-auto rounded-lg object-cover"
            alt=""
            loading="eager"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={textAnim}
          className="w-full lg:w-[45%] flex flex-col gap-3 text-center lg:text-left"
        >
          <span className="text-[#E58411] text-[14px] sm:text-[16px]">
            WHO WE ARE
          </span>

          <h1 className="font-playfair font-bold text-[24px] sm:text-[20px] md:text-[25px] lg:text-[20px] xl:text-[36px] leading-tight">
            The Ultimate Thrift <br className="hidden xl:block" />
            Styling Experience
          </h1>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[13px] text-[#1E1E1E] font-light leading-[22px]">
            A&O essentials offers carefully chosen designer-inspired handbags built for everyday style and value.
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-[#F6973F] w-full sm:w-auto max-w-[320px] mx-auto lg:mx-0 rounded-[8px] text-white font-semibold text-center"
          >
            View New Arrivals on Instagram
          </a>
        </motion.div>

      </motion.div>

    </div>
  );
};

export default Section2;
