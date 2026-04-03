import React, { useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa"; // <-- import icons

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is A&O Essentials?",
      answer:
        "A&O Essentials curates stylish, high-quality designer-inspired handbags for everyday wear. We focus on value, honest descriptions, and meticulous product photos so you can shop with confidence. Think of our collection as accessible, fashion-forward pieces that deliver premium looks without the designer price tag.",
    },
    {
      question: "How do I buy from this site?",
      answer:
        "This site is a credibility hub, purchases are completed via Instagram. Tap \"Shop via Instagram\" on any product to open a DM with a pre-filled message (item name, your city). We'll respond quickly with price, shipping, and payment options and hold items on request until payment is confirmed.",
    },
    {
      question: "Can I track my shipping if  I place an Order?",
      answer:
        "Yes, all orders ship with tracking from our U.S./Canada fulfillment and you'll receive a tracking number once the label is created. For higher-value orders we offer insured shipping and signature on delivery for added peace of mind. If you need expedited or insured options, DM us before purchase and we'll confirm costs.",
    },
    {
      question: "Where are you located?",
      answer:
        "We operate fulfillment from locations in the United States and Canada to deliver fast, reliable shipping across North America. Product listings will indicate the ship-from location when relevant; if you need a specific dispatch origin or shipping speed, let us know in your DM and we'll accommodate where possible.",
    },
    {
      question: "What’s my guarantee since the bags are preowned?",
      answer:
        "Every listing includes multiple high-resolution photos and clear condition notes so you know exactly what you're buying. If an item is described as pre-owned, we outline wear and provide measurements; for new or \"like-new\" items we say so explicitly. We accept returns within 7 days for items materially not as described — buyer pays return shipping unless we misrepresented the product.",
    },
    {
      question: "Are your bags original designer bags with label and code?",
      answer:
        "No — our products are designer-inspired and clearly labelled as such. We do not claim affiliation with or authenticity of designer trademarks. All product pages explicitly state material, construction and whether an item is branded, inspired, or unbranded so buyers can choose with full transparency.",
    },
    {
      question: " What’s your returns policy?",
      answer:
        "We accept returns within 7 days from delivery only if the item is materially different from its description or photos. To start a return, DM us with your order details and we'll issue a return authorization and next steps. Unless we misrepresented the item, customers are responsible for return shipping; insured returns are recommended for higher-value items.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-6 bg-[#FFFBF6] md:px-10 lg:px-[120px] py-16 md:py-24 max-w-[1600px] w-full mx-auto">
      <div className="w-full gap-[40px] xl:gap-[100px] items-center flex-col xl:flex-row justify-center flex">
        <div className="flex w-full lg:w-[55%] flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border w-full border-black/10 rounded-xl overflow-hidden bg-white/40 backdrop-blur-md"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium text-[10px] md:text-[15px] text-[#F6973F] sm:text-[16px]">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span className="transition-transform text-[#A9A2A2] duration-300">
                    {isOpen ? <FaArrowUp /> : <FaArrowRight />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm border-t-1 py-2 border-gray-300 sm:text-[15px] text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="w-[45%] w-full flex flex-col items-center xl:items-start justify-center py-4 flex flex-col gap-[6px]">
            {" "}
            <span className="text-[#E58411] text-[16px]">FAQs</span>
            <h1 className=" font-playfair mt-1 max-w-[544px] leading-[35px] text-center xl:text-left font-bold w-full text-[30px]">
              Got any question? We’ve <br /> got you covered
            </h1>
            <p className="mt-[7.5px] md:max-w-[400px] lg:w-full text-center xl:text-left w-full text-[15px] font-light text-[#1E1E1E] leading-[25px]">
              At A&O Essentials, we believe some customers might have questions,
              and feedback before purchasing from us.
            </p>
            <button className="px6 py-3 mt-[15px] bg-[#F6973F] w-auto max-w-[200px] w-full rounded-[8px] text-white font-semibold">
              Send us a message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;