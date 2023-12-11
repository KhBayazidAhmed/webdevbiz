"use client";
import Image from "next/image";
import Logo from "../../public/Images/logo.svg";
import MobileMenu from "../../public/Images/mobileToggle.svg";
import Link from "next/link";
import { useState } from "react";

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
    <nav className=" flex items-center uppercase font-light text-white text-xl justify-between fixed w-full p-5 bg-[#212134]">
      <Link href="/">
        <Image src={Logo} alt="WebDevBiz" width={150} />
      </Link>
      <div onClick={showNavInMobile} className="sm:hidden">
        <Image
          className="bg-white cursor-pointer"
          src={MobileMenu}
          width={30}
          alt="MobileMenu"
        />
      </div>
      <div
        className={
          mobileMenu
            ? `flex absolute items-center text-white flex-col left-0 top-[85px] pt-1 bg-gray-800  w-full`
            : `hidden sm:flex gap-6`
        }
      >
        {navItems.map((items, index) => {
          return (
            <Link
              className={
                mobileMenu &&
                `transition duration-300 ease-in-out hover:bg-gray-500 m-1 py-1 w-full text-center  `
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
