import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { whatsappUrl } from "../contactLinks";

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
        "This site is a credibility hub, purchases are completed via Instagram. Tap \"Shop via Instagram\" on any product to open a DM with a pre-filled message.",
    },
    {
      question: "Can I track my shipping if I place an Order?",
      answer:
        "Yes, all orders ship with tracking from our U.S./Canada fulfillment and you'll receive a tracking number once shipped.",
    },
    {
      question: "Where are you located?",
      answer:
        "We operate fulfillment from the United States and Canada to ensure fast shipping.",
    },
    {
      question: "What’s my guarantee since the bags are preowned?",
      answer:
        "We provide clear condition notes and real photos so you know exactly what you're buying.",
    },
    {
      question: "Are your bags original designer bags with label and code?",
      answer:
        "No — our products are designer-inspired and clearly labelled as such.",
    },
    {
      question: "What’s your returns policy?",
      answer:
        "We accept returns within 7 days only if the item is materially different from its description.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="px-4 sm:px-6 bg-[#FFFBF6] md:px-10 lg:px-[120px] py-16 md:py-24 max-w-[1600px] w-full mx-auto">

      <div className="w-full gap-[40px] xl:gap-[100px] items-center flex-col xl:flex-row justify-center flex">

        {/* 🔥 FAQ SECTION (ANIMATED ONLY THIS) */}
        <motion.div
          className="flex w-full lg:w-[55%] flex-col gap-4"
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border w-full border-black/10 rounded-xl overflow-hidden bg-white/40 backdrop-blur-md"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium text-[10px] md:text-[15px] text-[#F6973F] sm:text-[16px]">
                    {faq.question}
                  </span>

                  <span className="transition-transform text-[#A9A2A2] duration-300">
                    {isOpen ? <FaArrowUp /> : <FaArrowRight />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm py-2 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* 🔥 RIGHT TEXT (ANIMATED ONLY THIS) */}
        <motion.div
          className="w-full lg:w-[45%] flex flex-col items-center xl:items-start justify-center gap-[6px]"
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-[#E58411] text-[16px]">FAQs</span>

          <h1 className="font-playfair mt-1 max-w-[544px] leading-[35px] text-center xl:text-left font-bold w-full text-[30px]">
            Got any question? We’ve <br /> got you covered
          </h1>

          <p className="mt-[7.5px] md:max-w-[400px] lg:w-full text-center xl:text-left w-full text-[15px] font-light text-[#1E1E1E] leading-[25px]">
            At A&O Essentials, we believe some customers might have questions,
            and feedback before purchasing from us.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 mt-[15px] bg-[#F6973F] w-auto max-w-[200px] w-full rounded-[8px] text-white font-semibold text-center"
          >
            Send us a message
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Section5;
