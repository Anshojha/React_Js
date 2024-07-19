import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile</li>
        <li>ContactUs</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sing in</button>
      </div>
    </div>
  )
}

export default Navbar
