import React from "react";
import { motion } from "framer-motion";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import bag3 from "../assets/louiv.png";
import bag4 from "../assets/chain.png";

const Section3 = () => {

  // 🔥 parent trigger (no stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0
      }
    }
  };

  // 🔼 text comes from TOP
  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // 🔽 images come from BOTTOM
  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      id="best-seller"
      className="
        w-full
        px-4 sm:px-6 md:px-10 lg:px-[80px] xl:px-[120px]
        py-16 md:py-24
        mx-auto
        flex flex-col items-center
        max-w-[1600px]
        bg-[#FFF0DE]
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.4
      }}
    >

      {/* 🔼 TEXT FROM TOP */}
      <motion.div variants={textVariant}>
        <h1 className="
          text-[#F6973F]
          text-[28px]
          sm:text-[36px]
          md:text-[42px]
          lg:text-[48px]
          font-playfair
          text-center
        ">
          Best Selling Pieces
        </h1>
      </motion.div>

      {/* Grid */}
      <div className="
        mt-10 md:mt-[64px]
        gap-9 sm:gap-6
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        w-full
        place-items-center
      ">

        {[bag1, bag2, bag3, bag4].map((bag, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="
              w-full
              max-w-[420px]
              flex
              justify-center
            "
          >
            <div
              className="
                w-full
                h-[420px]
                sm:h-[470px]
                md:h-[540px]
                flex
                items-center
                justify-center
              "
            >
              <img
                src={bag}
                alt=""
                className="
                  w-full
                  h-full
                  object-contain
                "
              />
            </div>
          </motion.div>
        ))}

      </div>

    </motion.div>
  );
};

export default Section3;
