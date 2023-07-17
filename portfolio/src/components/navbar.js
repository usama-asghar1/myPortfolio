"use client"
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io"

const NAV_ITEMS = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
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
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>Usama Asghar</h2>
              </div>
            </Link>
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
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className={`block lg:inline-block ${darkMode ? "text-white" : "text-black"} hover:text-neutral-500 dark:text-neutral-100`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              ))}
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
