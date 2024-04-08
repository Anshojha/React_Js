import React from 'react';
import Logo from '../assets/logo2.jpeg'
const navbar = () => {
  return (
    <nav className='flex w-full bg-gray-200 items-center justify-between flex-shrink p-6 fixed'>
      <div className='flex items-center flex-shrink-0 mr-6 text-white'>
        <a href="/">
          <img src={Logo} className='h-14 w-14 rounded-lg' alt="" />
        </a>
      </div>
      <div className='w-full block flex-grow lg:flex   lg:items-center lg:w-auto '>
        <div className='lg:flex-grow text-3xl md:flex md:items-center md:justify-center md:space-x-11'>
          <a href="/" className='block mt-4 lg:inline-blok lg:mt-0 text-gray-800 hover:text-gray-900'>Home</a>
          <a href="/About Us" className='block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900'>About Us</a>
          <a href="/Serviices" className='block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900'>Our Services</a>
        </div>
        <div className='text-3xl block px-4 py-2 bg-black rounded-lg text-white mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 focus:outline-none focus:shadow-outline-blue border border-gray-400 text-lg'>
          <a href="/">Contact Us</a>
        </div>
      </div>

    </nav>
  );
};

export default navbar;
