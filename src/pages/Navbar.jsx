import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaInfoCircle, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";
import useThemeStore from "../store/themeStore";
import themes from "../themes";

const themeNames = {
  theme1: "Organ Transplant",
  theme2: "Cosmetic Surgery",
};

const themeOrder = ["theme1", "theme2"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);
 

  const { currentTheme, setTheme } = useThemeStore();

  // Set default theme on mount
  useEffect(() => {
    setTheme("theme2");
  }, [setTheme]);

 

  const handleThemeSwitch = () => {
    const nextIndex = (themeIndex + 1) % themeOrder.length;
    const nextTheme = themeOrder[nextIndex];
  
    const confirmSwitch = window.confirm(`Do you want to switch to "${themeNames[nextTheme]}"?`);
    if (confirmSwitch) {
      setThemeIndex(nextIndex);
      setTheme(nextTheme);
    }
  };
  

  const theme = themes[currentTheme];

  return (
    <div
      className="relative z-10"
      style={{ backgroundColor: theme.colors.primary, color: theme.colors.text }}
      
    >
      <div className="flex items-center md:hidden justify-between px-6 py-4 ">
       
       <div className="text-white text-3xl font-bold">
         <h1> 
           <b>go</b><span className="font-extralight">Get</span><b>Well</b><span className="font-extralight">.ai</span>
         </h1>
       </div>

      
       <div className="md:hidden">
         <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
           {isOpen ? <FaTimes /> : <FaBars />}
         </button>
       </div>
     </div>

   <div className="hidden md:flex items-center justify-center gap-100 p-10">
 
     <div className="text-white text-3xl font-bold">
         <h1> 
           <b>go</b><span className="font-extralight">Get</span><b>Well</b><span className="font-extralight">.ai</span>
         </h1>
      
   <div className="md:hidden">
         <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
           {isOpen ? <FaTimes /> : <FaBars />}
         </button>
       </div>
     </div>

     <div className=" mt-0 flex justify-center items-center gap-5 text-white  ">
       <a href="/">About</a>
      
       <a href="/">F&Q</a>
     
       <a href="/">Contact</a>
   
    <button
         onClick={handleThemeSwitch}
         className="w-10 h-10 rounded-full border text-xl flex items-center justify-center shadow-md"
         style={{ backgroundColor: theme.colors.secondary, color: theme.colors.text }}
       >
         🎨
       </button>
     </div>
      
      <div className="flex gap-5">
          <div className="rounded-md border bg-white text-black p-2">
            <button>Login</button>
          </div>
          <div className="rounded-md border bg-[var(--primary)] flex items-center p-2">
            <button>Get Started</button>
          </div>
      </div>
 </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 min-h-screen flex flex-col items-center gap-6 py-6 text-white font-semibold absolute inset-0 z-40">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes />
          </button>

          <div className="flex mt-20 items-center gap-2">
            <FaInfoCircle size={24} className="text-red-500" />
            <a href="/">About</a>
          </div>
          <div className="flex items-center gap-2">
            <FaQuestionCircle size={24} className="text-red-500" />
            <a href="/">F&Q</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={24} className="text-red-500" />
            <a href="/">Contact</a>
          </div>

          {/* 🎨 Theme Button */}
          <button
            onClick={handleThemeSwitch}
            className="mt-4 w-10 h-10 rounded-full border text-xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: theme.colors.secondary, color: theme.colors.text }}
          >
            🎨
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
