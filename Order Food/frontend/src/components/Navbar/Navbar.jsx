import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState("home"); 

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home" ? "active" : ""}>Home</Link>
        <a href='#expolre-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={()=>{setMenu("mobile")}} className={menu==="mobile" ? "active" : ""}>Mobile</a>
        <a href='#footer' onClick={()=>{setMenu("contactus")}}  className={menu==="contactus" ? "active" : ""}>ContactUs</a>
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
