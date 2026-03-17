import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      absolute top-0 left-0 right-0
      w-full max-w-[1600px]
      mx-auto z-30
      px-4 sm:px-6 md:px-10 lg:px-[120px]
      py-4
      flex justify-between items-center
      text-white
    ">

      {/* LOGO */}
      <div className="w-[70px] sm:w-[83px] z-40">
        <img src={logo} alt="logo" />
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex text-[14px] font-light gap-6">
        <li className="hover:text-[#F6973F] cursor-pointer">Home</li>
        <li className="hover:text-[#F6973F] cursor-pointer">About</li>
        <li className="hover:text-[#F6973F] cursor-pointer">Best Seller</li>
        <li className="hover:text-[#F6973F] cursor-pointer">Our CEO</li>
        <li className="hover:text-[#F6973F] cursor-pointer">Collectives</li>
        <li className="hover:text-[#F6973F] cursor-pointer">Testimonials</li>
        <li className="hover:text-[#F6973F] cursor-pointer">FAQs</li>
      </ul>

      {/* ICON BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-[22px] z-40"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU OVERLAY */}
      <div className={`
        fixed top-0 left-0 w-full h-screen
        bg-[#F6973F]/80 backdrop-blur-lg
        flex flex-col
        items-start
        justify-center
        gap-8
        px-8
        text-[18px]
        transform transition-all duration-500 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"}
      `}>

        <p onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#F6973F]">Home</p>
        <p onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#F6973F]">About</p>
        <p onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#F6973F]">Best Seller</p>
        <p onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#F6973F]">Our CEO</p>
        <p onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#F6973F]">Collectives</p>
        <p onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#F6973F]">Testimonials</p>
        <p onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#F6973F]">FAQs</p>

      </div>

    </nav>
  );
};

export default Navbar;