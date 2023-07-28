
// add see through navbar using useScroll hook
"use client"
import { useState, useEffect } from "react";
import NextLink from "next/link"

import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io"


export default function NavbarSubPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [navbar, setNavbar] = useState(false)

  const navbarStyle = {
    boxShadow: darkMode ? "0 2px 4px 0 rgba(255, 255, 255, 0.1)" : "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    borderColor: darkMode ? "#ffffff" : "#000000",
  };
  return (
    <header
      className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow ${darkMode ? "bg-stone-900" : "bg-white"}`}
      style={navbarStyle}
    > 
    <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NextLink href="/">
              <button className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700">Back to Home</button>
            </NextLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
           className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`} >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
    
              <button
                onClick={toggleDarkMode}
                className="bg-slate-100 p-2 rounded-xl"
              >
                {darkMode ? <RiSunLine size={25} color="black" /> : <RiMoonFill size={25} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
