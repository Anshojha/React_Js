import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


function Home() {
  return (
    <>
      <div className='md:pt-[200px] flex flex-col items-center justify-between h-screen w-full'>
        <div className='font-headingFont space-y-4 flex flex-col items-center justify-center font-extrabold'>
          <p className='md:text-5xl flex items-center justify-center px-4 text-lg text-justify text-black'>
          Sapiente maiores nemo libero, qui facilis corporis. Laborum, ea.
          </p>
          <p className='md:text-5xl flex items-center justify-center px-4 text-lg text-justify text-black text-break'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className='"flex items-center justify-center  md:mt-[10%] mt-[20%]'>
          <a className='md:p-3 md:px-6 flex items-center justify-center p-5 px-4 text-white bg-black rounded-full font-BodyFont' href="">
            Let's connect <FaArrowRight className="pl-2" size={25} />
          </a>
        </div>
        <div className="relative w-full md:h-[60%]  h-[20%] ">
          {' '}
          <svg
            className="absolute bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320">
            <path
              fill="#B3B6BE"
              fill-opacity="1"
              d="M0,128L30,144C60,160,120,192,180,192C240,192,300,160,360,154.7C420,149,480,171,540,192C600,213,660,235,720,229.3C780,224,840,192,900,202.7C960,213,1020,267,1080,245.3C1140,224,1200,128,1260,96C1320,64,1380,96,1410,112L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          </svg>
        </div>
      </div>

    </>
  )
}

export default Home
