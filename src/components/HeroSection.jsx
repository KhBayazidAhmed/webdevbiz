import Image from "next/image";
import HeroImage from "../../public/Images/hero.png";

const HeroSection = () => {
  return (
    <div className=" md:flex-row pt-[85px] mb-3 bg-[#181826] flex flex-col justify-center w-full text-white lg:h-screen">
      <div className="flex md:w-1/2 md:pt-0 pt-4 gap-4 items-center text-center  flex-col justify-center ">
        <h1 className=" text-4xl md:text-3xl uppercase font-semibold">
          your online success begins now
        </h1>
        <div className="w-56 h-1  bg-blue-800"></div>
        <p className="text-base capitalize">
          your success story starts today with our web development services
        </p>
        <button className="bg-blue-800 px-8 my-5 uppercase py-3">
          hire me
        </button>
      </div>

      <div className="flex md:w-1/2  lg:h-full  flex-col w-full justify-center  items-center ">
        <Image
          class="object-cover w-full  lg:object-contain  h-full"
          src={HeroImage}
          alt="Its a image of bayazid"
        />
        <div className="w-full  h-1  bg-blue-800"></div>
      </div>
    </div>
  );
};

export default HeroSection;
