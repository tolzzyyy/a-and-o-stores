import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroVideo from "../assets/A_O_Thrift_Store_Hero.mp4";
import popper from "../assets/popper.png";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./Footer";
import { instagramUrl, whatsappUrl } from "../contactLinks";

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="relative w-full">

      {/* HERO */}
      <div className="sticky top-0 z-10 w-full max-w-[1600px] mx-auto h-svh overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={HeroVideo}
          autoPlay
          loop
          muted
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-8">

          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-3 sm:px-4 py-2 max-w-full">
            <img className="w-5 h-5 sm:w-6 sm:h-6 mr-2" src={popper} alt="" />
            <span className="text-xs sm:text-sm font-light text-white">
              Limited pieces, every bag is one-of-a-kind
            </span>
          </div>

          <h1 className="mt-4 font-playfair w-full max-w-[952px] leading-tight text-[25px] sm:text-[42px] md:text-[56px] lg:text-[72px] xl:leading-[80px]">
            Preowned Designer Inspired Handbags, Timeless Pieces.
          </h1>

          <p className="mt-4 max-w-[700px] md:max-w-[900px] text-[#FFF0DE] text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] md:leading-[32px] px-2">
            Classic preowned designer inspired handbags selected for style and
            condition.
            <br className="hidden sm:block" />
            Reserve via Instagram and get secure shipment across the United States.
          </p>

          <div className="mt-6 flex w-full sm:w-auto px-[10px] flex-col sm:flex-row items-center gap-[15px] sm:gap-6">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-3 md:px-6 py-3 bg-[#F6973F] text-[12px] md:text-[15px] rounded-[8px] text-white font-semibold text-center"
            >
              Shop via Instagram
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-2 md:px-6 md:text-[15px] text-[12px] py-3 border border-[#F6973F] rounded-[8px] text-[#F6973F] font-semibold text-center"
            >
              Message on Whatsapp
            </a>
          </div>

          <div className="mt-6 sm:mt-8">
            <p className="text-[#FFF0DE] text-sm sm:text-base">
              Quality • Transparency • Fast Shipping
            </p>
          </div>

        </div>
      </div>

      {/* ✅ SECTION 2 */}
      <div ref={sectionRef} className="relative z-20 bg-white">
        <Section2 scrollYProgress={scrollYProgress} />
      </div>

      {/* ✅ NORMAL FLOW SECTIONS */}
      <div className="relative z-20 ">
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>

    </div>
  );
};

export default Hero;
