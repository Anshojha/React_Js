import React, { useState, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex font-HeadingFont items-center justify-between flex-wrap p-6 fixed w-full z-30 top-0  transition-all ${
        isScrolled
          ? 'bg-white backdrop-blur-[10px] bg-opacity-65'
          : 'bg-white  backdrop-blur-[10px]'
      }`}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" className="cursor-pointer">
          <img src={Logo} alt="logo" className="h-14 w-14" />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleNavbar}
          className={`flex items-center px-3 py-2 border rounded text-black border-gray-400 hover:text-white hover:bg-gray-800`}>
          <MdMenu className="h-7 w-7 fill-current" />
        </button>
      </div>
      <div
        className={`${
          isOpen ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="lg:flex-grow text-3xl md:flex md:items-center md:justify-center md:space-x-11">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900 mr-4">
            Home
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900 mr-4">
            About Us
          </a>
          <a
            href="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900">
            Our Services
          </a>
        </div>
        <div>
          <a
            className="block px-4 py-2 bg-black rounded-lg text-white mt-4 lg:inline-block lg:mt-0  hover:text-gray-900  hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue  border border-gray-400 text-lg"
            href="https://forms.gle/gC14oUFKpQCQS21T7">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
