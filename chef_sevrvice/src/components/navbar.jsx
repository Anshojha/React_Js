import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo2.jpeg'
import { MdMenu } from 'react-icons/md';
const navbar = () => {

  const [isOpen, setisOpen] = useState(false)
  const [isScrolled, setisScrolled] = useState(false)


  const toggleNavbar = () => {
    setisOpen(!isOpen)
  }

  useEffect(() => {
    const handleScrole = () => {
      const scrolled = window.scrollY > 0;
      setisScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScrole)

    return () => {
      window.addEventListener('scroll', handleScrole);
    }
  }, [])

  return (
    <nav className={`flex w-full bg-white items-center shadow-md font-HeadingFont justify-between flex-shrink p-6 fixed z-30 top-0 ${isScrolled ? 'bg-white backdrop-blur-[10px] bg-opacity-65 '
        : 'bg-white backdrop-blur-[10px]'
      }`}>
      <div className='flex items-center flex-shrink-0 mr-6 text-white'>
        <a href="/">
          <img src={Logo} className='h-14 w-14 rounded-lg' alt="" />
        </a>
      </div>
      <div className='block lg:hidden'>
       <button
         onClick={toggleNavbar}
         className={`flex items-center px-3 py-2 border rounded text-black border-gray-400 hover:text-white hover:bg-gray-800`}
       >
        <MdMenu className="h-7 w-7 fill-current"/>
       </button>
      </div>
      <div className={`${isOpen ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className='lg:flex-grow text-3xl md:flex md:items-center md:justify-center md:space-x-11'>
          <a href="/" className='block mt-4 lg:inline-blok lg:mt-0 text-gray-800 hover:text-gray-900'>Home</a>
          <a href="/About Us" className='block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900'>About Us</a>
          <a href="/Serviices" className='block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900'>Our Services</a>
        </div>
        <div className=' text-3xl block px-4 py-2 bg-black rounded-lg text-white mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white focus:outline-none focus:shadow-outline-blue border border-gray-400 text-lg'>
          <a href="/">Contact Us</a>
        </div>
      </div>

    </nav>
  );
};

export default navbar;
