import React, { useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa"; // <-- import icons

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is A&O Essentials?",
      answer:
        "We offer designer-inspired handbags carefully selected for quality and style. Each piece is inspected and verified before listing.",
    },
    {
      question: "How do I buy from this site?",
      answer:
        "Currently, we ship across the United States with secure delivery. International shipping options may be added soon.",
    },
    {
      question: "Can I track my shipping if  I place an Order?",
      answer:
        "You can reserve items directly via Instagram or contact us through WhatsApp for quick assistance.",
    },
    {
      question: "Where are you located?",
      answer:
        "We accept secure payments via bank transfer and other trusted payment options provided during checkout.",
    },
    {
      question: "What’s my guarantee since the bags are preowned?",
      answer:
        "Returns are handled on a case-by-case basis. Please review product details carefully before purchasing.",
    },
    {
      question: "Are your bags original designer bags with label and code?",
      answer:
        "Delivery typically takes 2–5 business days depending on your location within the U.S.",
    },
    {
      question: " What’s your returns policy?",
      answer:
        "Yes, most of our pieces are limited and unique, which means once sold, they may not be restocked.",
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