import React from 'react';

const aboutCard = () => {
  return (
    <div className="relative flex flex-row items-center justify-center w-full h-screen">
      <div className="absolute shadow-2xl shadow-black flex left-[4%] md:left-[28%] items-center justify-center border-black border-2 top-0 md:top-0 md:w-[25%] w-[250px] md:h-[70%] h-[250px] bg-[#FFB5B5] rounded-3xl">
        <div className="relative w-full h-full">
          <div className="font-HeadingFont md:-top-[7%] md:text-xl  text-xs font-bold -top-[6%] rounded-3xl border-2 flex justify-center items-center border-black md:left-[22%] left-[20%] md:w-[60%] w-[65%] md:h-[16%] h-[17%] bg-[#FFD600] absolute">
            What Sets Us Apart
          </div>
        </div>

        <div className="absolute md:left-[11%] left-[5%] z-10 space-y-5 md:space-y-8">
          <p className=" md:text-2xl font-BodyFont">Client-Centric Approach</p>
          <p className=" md:text-2xl font-BodyFont">Versatile</p>
          <p className=" md:text-2xl font-BodyFont">Innovation at the Core</p>
        </div>
      </div>
      <div className="absolute flex items-center shadow-2xl shadow-black justify-center bg-[#FFBD8E] border-black border-2 md:right-[25%] right-[4%] md:bottom-[10%] bottom-[8%] md:w-[25%] w-[50%] md:h-[70%] h-[60%] rounded-3xl">
        <div className="relative w-full h-full">
          <div className="font-HeadingFont md:-top-[7%] md:text-xl text-xs font-bold  -top-[6%] rounded-3xl border-2 flex justify-center items-center border-black md:left-[22%] left-[20%] md:w-[60%] w-[65%] md:h-[16%] h-[17%] bg-[#FFD600] absolute">
            Why Choose Us
          </div>
        </div>

        <div className="absolute md:left-[11%] left-[5%] z-10 space-y-5 md:space-y-8">
          <p className=" md:text-2xl font-BodyFont">Reliability</p>
          <p className=" md:text-2xl font-BodyFont">Scalability</p>
          <p className=" md:text-2xl font-BodyFont">Collaboration</p>
        </div>
      </div>
    </div>
  );
};

export default aboutCard;
