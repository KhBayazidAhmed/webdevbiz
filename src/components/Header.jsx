"use client";
import Image from "next/image";
import Logo from "../../public/Images/logo.svg";
import Link from "next/link";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/resume",
      name: "Resume",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];
  function showNavInMobile() {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav
      className=" flex items-center uppercase font-light text-white text-md justify-between fixed w-full p-5 
    bg-clip-padding backdrop-filter  backdrop-blur-lg 
    bg-blue-600 bg-opacity-50 backdrop-saturate-50 backdrop-contrast-150"
    >
      <Link href="/">
        <Image src={Logo} alt="WebDevBiz" width={150} />
      </Link>
      <div onClick={showNavInMobile} className="sm:hidden cursor-pointer">
        <CgMenuGridO size={30} />
      </div>
      <div
        className={
          mobileMenu
            ? `flex absolute items-center text-white flex-col left-0 top-[85px] pt-1 bg-[#181826] border-b border-gray-700 shadow-2xl w-full`
            : `hidden sm:flex gap-6`
        }
      >
        {navItems.map((items, index) => {
          return (
            <Link
              className={
                mobileMenu
                  ? `transition duration-300 ease-in-out hover:bg-gray-700 m-1 py-1 w-full text-center  `
                  : null
              }
              key={index}
              href={items.link}
            >
              {items.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
