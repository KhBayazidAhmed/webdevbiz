import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex w-full text-center md:text-left items-center md:items-start flex-col md:flex-row gap-2 md:pl-10 ">
        <div className="md:h-20 md:w-1 h-1 w-[90%]   bg-blue-800"></div>{" "}
        <div className="w-full text-centers">
          <h1 className="text-3xl font-bold uppercase">Still Learning</h1>
          <p className="text-sm">
            A journey of growth,
            <br /> curiosity,and personal development
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row items-center gap-2 md:pl-10 pl-0 mt-5 md:mt-20">
        <div className="flex justify-center  opacity-70 items-center rounded-b-full md:rounded-e-full md:rounded-b-none -ml-10 md:-ml-10 md:w-36 md:h-72  h-36 w-72 shadow-[0px_0px_300px_100px_rgba(3,_18,_242,_0.2)]  bg-blue-800 ">
          <h1 className="text-3xl filter-none font-bold ">Skills</h1>
        </div>
        <div className="flex md:flex-1 items-end flex-col gap-5 w-full mt-10 pr-10">
          <div className="w-[90%] bg-black ">
            <div className="flex w-[60%] justify-between items-center px-5 bg-gradient-to-r from-black to-blue-800 ">
              <h1 className="text-xl font-bold">JS</h1>
              <span className="text-xl font-bold">70%</span>
            </div>
          </div>
          <div className="w-[90%] bg-black ">
            <div className="flex w-[60%] justify-between items-center px-5 bg-gradient-to-r from-black to-blue-800 ">
              <h1 className="text-xl font-bold">JS</h1>
              <span className="text-xl font-bold">70%</span>
            </div>
          </div>
          <div className="w-[90%] bg-black ">
            <div className="flex w-[60%] justify-between items-center px-5 bg-gradient-to-r from-black to-blue-800 ">
              <h1 className="text-xl font-bold">JS</h1>
              <span className="text-xl font-bold">70%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
