import React from "react";
import video from "../assets/video.png";
import bags from "../assets/bags.png";

const Section4 = () => {
  return (
    <div className="
      w-full
      px-4 sm:px-6 md:px-10 lg:px-[80px] xl:px-[120px]
      mx-auto
      max-w-[1600px]
      flex flex-col
      bg-[#FFFBF6]
      items-center
      py-16 md:py-24
    ">

      {/* TOP SECTION */}
      <div className="
        flex flex-col xl:flex-row
        items-center md:items-start
        gap-8 md:gap-[40px] lg:gap-[50px]
        w-full
      ">

        {/* LEFT */}
        <div className="w-full lg:w-[40%] text-center md:text-left">
          <h1 className="font-playfair font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[32px]">
            Why Choose Us
          </h1>

          <button className="mt-4 px-4 sm:px-6 py-3 bg-[#F6973F] text-[13px] sm:text-[15px] rounded-[8px] text-white font-semibold">
            Shop Now
          </button>
        </div>

        {/* RIGHT FEATURES */}
        <div className="
          grid w-full
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
          gap-6
        ">

          <div className="flex flex-col items-center md:items-start gap-2 max-w-[400px]">
            <h1 className="text-[16px] sm:text-[18px] font-semibold">
              Accurate Descriptions
            </h1>
            <p className="font-light text-center md:text-left text-[13px] sm:text-[14px]">
              We describe materials, measurements and condition clearly. What you see in photos is what you get.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 max-w-[400px]">
            <h1 className="text-[16px] sm:text-[18px] font-semibold">
              Fast U.S. Shipping
            </h1>
            <p className="font-light text-center md:text-left text-[13px] sm:text-[14px]">
              Orders ship from our U.S. facility with tracking and insured options.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 max-w-[400px]">
            <h1 className="text-[16px] md:text-left sm:text-[18px] font-semibold">
              Customer Care
            </h1>
            <p className="font-light text-center md:text-left text-[13px] sm:text-[14px]">
              Direct DM support and dedicated return policies.
            </p>
          </div>

        </div>
      </div>

      {/* SECTION 2 */}
      <div className="
        w-full
        flex flex-col lg:flex-row
        mt-16 md:mt-[120px]
        gap-10 lg:gap-[80px]
        items-center
      ">

        <div className="w-full lg:w-1/2">
          <img src={video} className="w-full h-auto" alt="" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-2 text-center lg:text-left">
          <span className="text-[#E58411] text-[14px] sm:text-[16px]">
            MEET THE CURATOR
          </span>

          <h1 className="font-playfair mt-1 font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-tight">
            A Message From The <br className="hidden sm:block" />
            CEO To Her Customers
          </h1>

          <p className="mt-2 text-[14px] sm:text-[15px] font-light text-[#1E1E1E] leading-[22px] sm:leading-[25px]">
            We curate pieces that balance fashion and value. Watch the short
            video to learn how we test materials, photograph items, and
            prepare shipments so you can buy with confidence.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="
        w-full
        flex flex-col lg:flex-row-reverse
        mt-16 md:mt-[120px]
        gap-10 lg:gap-[80px]
        items-center
      ">

        <div className="w-full lg:w-1/2">
          <img src={bags} className="w-full h-auto" alt="" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-2 text-center lg:text-left">
          <span className="text-[#E58411] text-[14px] sm:text-[16px]">
            CLASSIC COLLECTIONS
          </span>

          <h1 className="font-playfair mt-1 font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-tight">
            Amazing Collections to <br className="hidden sm:block" />
            Match Your Style
          </h1>

          <p className="mt-2 text-[14px] sm:text-[15px] font-light text-[#1E1E1E] leading-[22px] sm:leading-[25px]">
            New drops posted weekly on Instagram. Follow for early access and behind-the-scenes peeks.
          </p>

          <button className="mt-4 px-6 py-3 bg-[#F6973F] w-full sm:w-auto max-w-[220px] mx-auto lg:mx-0 rounded-[8px] text-white font-semibold">
            Order from Instagram
          </button>
        </div>

      </div>

    </div>
  );
};

export default Section4;