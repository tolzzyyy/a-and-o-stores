import React from "react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#FFFBF6] mb-[80px] px-4 sm:px-6 md:px-10 lg:px-[80px] xl:px-[120px] border-t-[#E58411] pt-5   text-white py-8">
      <div className="container mx-auto flex mt-8 py-8 border-t-[#E58411] border-t-1 flex-col md:flex-row justify-between items-start md:items-center  md:px-0">
        {/* Left: Logo and text */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <img src={logo} alt="Logo" className="w-[83px] mb-2" />
          <p className="text-[#1E1E1E] max-w-[563px] text-[14px]">
           A&O Essential Thrift store is here to deliver designer-inspired <br /> high quality handbags to suit your classic style and demands.
          </p>
        </div>

        {/* Right: Shop With Us */}
        <div className="flex flex-col items-start">
          <h3 className="text-black font-semibold mb-4">Shop From Us Today</h3>
          <div className="flex space-x-6">
            <div className="flex flex-col text-black items-center">
              <FaInstagram className="text-3xl mb-1  transition-colors" />
            </div>
            <div className="flex flex-col text-black items-center">
              <FaWhatsapp className="text-3xl mb-1 transition-colors" />
            </div>
            <div className="flex flex-col text-black items-center">
              <FaTiktok className="text-3xl mb-1  transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <p className=" text-[#C91B1B] text-[14px] ">
   Disclaimer: All products sold by A&O essentials are “designer-inspired” and not trademarked goods. A&O Essentials does not sell counterfeit or trademark-infringing products, customers should  understand and comply with their local laws and regulations when purchasing non-branded fashion goods.
      </p>
    </footer>
  );
};

export default Footer;
