import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Best Seller", href: "#best-seller" },
  { label: "Our CEO", href: "#our-ceo" },
  { label: "Collectives", href: "#collectives" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

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
      <a href="#home" className="w-[70px] sm:w-[83px] z-40">
        <img src={logo} alt="logo" />
      </a>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex text-[14px] font-light gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:text-[#F6973F] transition-colors">
              {item.label}
            </a>
          </li>
        ))}
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

        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="hover:text-black transition-colors"
          >
            {item.label}
          </a>
        ))}

      </div>

    </nav>
  );
};

export default Navbar;
