import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className=" p-8 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Copyright */}
        <p className=" text-sm">
          © {new Date().getFullYear()} gogetwell.ai
        </p>
        
        {/* Links Section */}
        <div className="flex flex-wrap gap-6  text-sm">
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms of Service</p>
          <p className="hover:underline cursor-pointer">Pricing Policy</p>
          <p className="hover:underline cursor-pointer">Editor Policy</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <div className="p-3 rounded-full bg-black text-white hover:scale-110 transition transform">
            <BsTwitter size={20} />
          </div>
          <div className="p-3 rounded-full bg-black text-white hover:scale-110 transition transform">
            <BsLinkedin size={20} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
