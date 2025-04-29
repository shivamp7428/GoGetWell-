import React, { useState } from "react";
import { FaBars, FaTimes, FaInfoCircle, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-800 to-gray-800">
      {/* Logo */}
      <div className="text-white text-3xl font-bold">
        <h1>
          <b>go</b><span className="font-extralight">Get</span><b>Well</b><span className="font-extralight">.ai</span>
        </h1>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center gap-6 text-gray-300 w-full">
        <div className="flex gap-7 mx-auto">
          <a href="/">About Us</a>
          <a href="/">F&Q</a>
          <a href="/">Contact Us</a>
          <a href="/themes">Themes</a> {/* Added the "Themes" link here */}
        </div>
        <div className="flex gap-4 ml-4">
          <div className="bg-white p-2 rounded-md">
            <button className="font-semibold">Login</button>
          </div>
          <div className="bg-[var(--primary)] text-white p-2 rounded-md">
            <button className="font-semibold">Get Started</button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (Visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 min-h-screen flex flex-col items-center gap-6 py-6 text-white font-semibold absolute inset-0 z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <FaTimes />
          </button>
          
          {/* Mobile Links */}
          <div className="flex mt-20 items-center gap-2">
            <FaInfoCircle size={24} className="text-red-500" />
            <a href="/">About Us</a>
          </div>
          <div className="flex items-center gap-2">
            <FaQuestionCircle size={24} className="text-red-500" />
            <a href="/">F&Q</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={24} className="text-red-500" />
            <a href="/">Contact Us</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={24} className="text-red-500" />
            <a href="/themes">Themes</a> {/* Added the "Themes" link here for mobile */}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="bg-white p-2 text-center text-black rounded-md">
              <button>Login</button>
            </div>
            <div className="bg-[var(--primary)] text-white p-2 rounded-md">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
