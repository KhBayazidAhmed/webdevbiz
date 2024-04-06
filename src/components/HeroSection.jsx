import Image from "next/image";
import HeroImage from "../../public/Images/hero.png";
import { FaLongArrowAltDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className=" md:flex-row mb-10 pt-[85px] relative -z-50 bg-[#181826] flex flex-col justify-center w-full text-white lg:h-screen">
      <div className="flex  md:w-1/2 md:pt-0 p-4 md:ml-6 md:mt-10 mt-0 gap-2 items-center md:items-start text-center  md:text-left  flex-col justify-center ">
        <h1 className=" text-3xl md:text-4xl uppercase font-semibold">
          your online success <br /> begins now
        </h1>
        <div className="w-52 h-1  bg-blue-800"></div>
        <p className="md:text-base text-sm ">
          Your success story starts today with our web <br />
          development services
        </p>
        <button className="bg-blue-800 px-8 mb-5  shadow-2xl shadow-blue-800 rounded-sm text-white uppercase py-3 ">
          hire me
        </button>
        <div className="md:flex hidden  justify-center items-center absolute bottom-0 left-10">
          <FaLongArrowAltDown className="text-5xl animate-bounce" />
        </div>
      </div>

      <div className="flex  md:w-1/2  lg:h-full  flex-col w-full justify-center  items-center ">
        <Image
          className="object-cover w-full  lg:object-contain  h-full"
          src={HeroImage}
          alt="Its a image of bayazid"
        />
        <div className="w-full hidden md:block  h-1  bg-blue-800"></div>
      </div>
    </div>
  );
};

export default HeroSection;
