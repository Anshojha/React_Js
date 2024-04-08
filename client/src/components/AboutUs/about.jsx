import React from 'react';
import aboutImage from '../../assets/about1.png';

const about = () => {
  return (
    <>
      <div className=" md:mt-0 mt-[60px] flex flex-col md:space-y-10 space-y-6 items-center pt-[10%] md:pt-[8%] w-full h-screen">
        <b className="md:text-5xl text-3xl font-HeadingFont ">ABOUT US</b>

        <p className="md:mx-[18%] mx-[8%] md:pb-4 pb-8 text-justify font-semibold text-lg md:text-xl font-BodyFont">
          At the core of our company's mission is the unwavering commitment to
          empowering businesses through innovative solutions. We strive to be
          the catalyst for your success by providing tailored services that
          adapt to your unique needs and challenges. Our goal is to streamline
          your processes, enhance collaboration, and drive growth in an
          ever-evolving digital landscape . We can make your idea into a reality
          from very initiating point whether it is a business idea,college
          project or something out of the box.
        </p>

        <div>
          <img src={aboutImage} alt="img" />
        </div>
      </div>
    </>
  );
};

export default about;
