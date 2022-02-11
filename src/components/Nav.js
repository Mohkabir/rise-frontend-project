import React, { useState } from 'react';
import { Link } from "react-router-dom";

import logo from '../asset/images/logo.svg';
import menuBar from '../asset/images/menu.svg';


const Nav = () => {

  const [ menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className=' wrapper'>
      <div className="w-50">
       <img src={logo}  alt="logo image" />
      </div>
      
      <img onClick={handleMenu} className="menuBar" src={menuBar} alt="menu bar" />
      <ul className={`menu primary ${menu?'open':'close'}`}>
        <li><Link to="/">Home</Link><span className='active'></span></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/">Investment Club</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">FAQs</Link></li>
      </ul>
    </nav>
  )
}

export default Nav