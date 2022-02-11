import React from 'react';
import { Link } from "react-router-dom";

import logo from '../asset/images/logo-black.svg';
import arrowSlightUp from '../asset/images/arrow-slight-up.svg';


const Footer = () => {
  return (
    <div className='footer wrapper'>
      <div className='flex'>
        <div>
          <img src={logo} alt="logo icon" />
          <p><Link to="/">About Us</Link></p>
          <p><Link to="/">Careers</Link></p>
          <p><Link to="/">FAQs</Link></p>
          <p><Link to="/">Contact Info</Link></p>
          <p><Link to="/">Press</Link></p>
          <p><Link to="/">Rise Impact</Link></p>
        </div>
        <div>
          <h4>Explore</h4>
          <p><Link to="/">Investmet Club <img src={arrowSlightUp} alt="arrow up icon" /></Link></p>
          <p><Link to="/">Blog <img src={arrowSlightUp} alt="arrow up icon" /></Link></p>
        </div>
      </div>
      <div className='flex'>
        <div>
          <h4>Products</h4>
          <p><Link to="/">Rise App</Link></p>
          <p><Link to="/">Wallets</Link></p>
          <p><Link to="/">Asset Classes</Link></p>
        </div>
        <address>
          <h4>Contact Us</h4>
          <p><Link to="/">0818 714 7405 <img src={arrowSlightUp} alt="arrow up icon" /></Link></p>
          <p><Link to="/">hello@rise.capital <img src={arrowSlightUp} alt="arrow up icon" /></Link></p>
          <p><Link to="/">Newsletter <img src={arrowSlightUp} alt="arrow up icon" /></Link></p>
          <p><Link to="/">Instagram <img src={arrowSlightUp} alt="arrow up icon" /></Link></p>
          <p><Link to="/">Twitter <img src={arrowSlightUp} alt="arrow up icon" /></Link></p>
        </address>
      </div>
    </div>
  )
}

export default Footer