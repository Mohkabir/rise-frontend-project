import React, { useState } from 'react';
import logo from '../asset/images/logo.svg';
import menuBar from '../asset/images/menu.svg';


const Nav = () => {

  const [ menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className='flex wrapper'>
      <img src={logo} className="w-50" alt="logo image" />
      
      <img onClick={handleMenu} className="menuBar" src={menuBar} alt="menu bar" />
      <ul className={`menu primary ${menu?'open':'close'}`}>
        <li>Home</li>
        <li>Products</li>
        <li>Investment Club</li>
        <li>Blog</li>
        <li>About Us</li>
        <li>FAQs</li>
      </ul>
    </nav>
  )
}

export default Nav