import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


function Home() {
  return (
    <>
    <div className='w-full h-screen  flex justify-center items-center'>
      <div className='w-1/2 h-full pt-[280px] pr-[100px] flex flex-col justify-center items-center mt-8 float-left'>
          <h1 className='text-black mb-7 text-7xl text-center text-lg-left font-[500] '>
            Chef Service
          </h1>
          <p className='text-black text-center p-4 text-lg mb-3 leading-9'>
          Enjoy a customized culinary experience with a <br /> Private Chef in the comfort of your own home.
          </p>
          <div className='pr-[240px]'>
              <button 
          style={{ borderColor: '#f4c858' }}
          className={`px-7  py-5 flao text-[#182427] text-lg font-[600] bg-[#f4c858] border rounded-full leading- `}
          >Get Started</button>
          </div>
        
      </div>
      <div className='w-1/2 h-full'> 
        <div className='h-full w-full bg-slate-200 flex flex-col  overflow-hidden'>
            <div className='h-[210px] w-[210px] '>
                <img className='rounded-2xl mt-4 mb-4' src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/common/header_hero_masonry/desktop/images/header_hero_masonry_01.jpg,w_210,h_295,c_1,q_80,fd_1,e_.webp" alt="" />
                <img className='rounded-2xl mt-4 mb-4' src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/common/header_hero_masonry/desktop/images/header_hero_masonry_01.jpg,w_210,h_295,c_1,q_80,fd_1,e_.webp" alt="" />
                <img className='rounded-2xl mt-4 mb-4' src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/common/header_hero_masonry/desktop/images/header_hero_masonry_01.jpg,w_210,h_295,c_1,q_80,fd_1,e_.webp" alt="" />
                <img className='rounded-2xl mt-4 mb-4' src="https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/common/header_hero_masonry/desktop/images/header_hero_masonry_01.jpg,w_210,h_295,c_1,q_80,fd_1,e_.webp" alt="" />
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
