import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import user1 from "../assets/user1.png";
import bagImage from "../assets/bag1.png"; // replace with your image

const testimonials = [
  {
    img: user1,
    name: "Jane Doe",
    text: "Absolutely love my new handbag! The quality is amazing and shipping was so fast.",
    rating: 5,
  },
  {
    img: user1,
    name: "Mary Smith",
    text: "A&O Essentials curated pieces are stunning! Very happy with my purchase.",
    rating: 4,
  },
  {
    img: user1,
    name: "Linda Johnson",
    text: "Great experience and beautiful bags. Customer service was very helpful.",
    rating: 5,
  },
  {
    img: user1,
    name: "Sarah Williams",
    text: "Great experience and beautiful bags. Customer service was very helpful.",
    rating: 5,
  },
];

const Section6 = () => {
  return (
    <>
      {/* ── TESTIMONIALS ── */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-[120px] md:py-[120px] bg-[#FFFBF6] max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="lg:w-[20%] w-full">
            <h1 className="text-[42px] text-center lg:text-left leading-tight font-playfair md:mb-5">
              Testimonials
            </h1>
          </div>

          <div
            className="lg:w-[80%] w-full min-w-0"
            style={{ overflowX: "clip" }}
          >
            <div className="px-10 pb-4" style={{ paddingTop: "40px" }}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  900: { slidesPerView: 3 },
                }}
                style={{ alignItems: "stretch" }}
                className="w-full"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} style={{ height: "auto" }}>
                    <div style={{ paddingTop: "40px" }} className="h-full pb-4">
                      <div className="relative w-full h-full bg-white rounded-xl shadow-lg px-6 pb-6 pt-10 flex flex-col items-center">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                          <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover shadow-md"
                          />
                        </div>
                        <p className="font-semibold text-gray-800 mb-2">
                          {testimonial.name}
                        </p>
                        <p className="text-center text-gray-600 text-sm sm:text-[15px] mb-4 flex-grow">
                          "{testimonial.text}"
                        </p>
                        <div className="flex gap-1 mt-auto">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #A9A2A2;
            top: 55%;
            transform: translateY(50%);
            width: 32px;
            height: 32px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 12px;
            font-weight: 900;
          }
          .swiper-button-prev {
            left: -10px;
          }
          .swiper-button-next {
            right: -10px;
          }
        `}</style>
      </div>

      {/* ── FEATURED CARD ── */}
     {/* ── FEATURED CARD ── */}
<div className="px-4 sm:px-6 md:px-10 lg:px-[120px] mt-[40px] pb-16 bg-[#FFFBF6] max-w-[1600px] mx-auto w-full">
  <div className="max-w-[900px] mx-auto">
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        minHeight: "420px",
        boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.75)",
      }}
    >
      {/* Background image */}
      <img
        src={bagImage}
        alt="Featured collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Overlay content */}
      <div
        className="relative z-10 flex flex-col justify-center items-center h-full p-8 sm:p-12"
        style={{ minHeight: "420px" }}
      >
       
        <h2 className="text-white font-playfair text-[32px] sm:text-[42px] text-center leading-[45px] mb-4 max-w-[500px]">
        Ready to Buy your next statement bag?
        </h2>
        <p className="text-white/80 text-[15px] text-center leading-relaxed mb-6 max-w-[420px]">
        DM to reserve your timeless pieces, <br /> fast shipment.
        </p>
         <div className="
            
            flex
            w-full
            sm:w-auto 
            px-[10px]
            flex-col
            flex-row
            items-center
            gap-[15px]
            sm:gap-6
          ">
            <button className="w-full sm:w-auto px-3 md:px-6 py-3 bg-[#F6973F] text-[12px] md:text-[15px] rounded-[8px] text-white font-semibold">
              Shop via Instagram
            </button>

            <button className="w-full sm:w-auto px-2 md:px-6 md:text-[15px] text-[12px] py-3 border border-[#F6973F] rounded-[8px] text-[#F6973F] font-semibold">
              Message on Whatsapp
            </button>
          </div>

      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Section6;