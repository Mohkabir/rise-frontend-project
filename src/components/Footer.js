import React from 'react';
import logo from '../asset/images/logo-black.svg';
import arrowSlightUp from '../asset/images/arrow-slight-up.svg';


const Footer = () => {
  return (
    <div className='footer wrapper'>
      <div className='flex'>
        <div>
          <img src={logo} alt="logo icon" />
          <p><a href="">About Us</a></p>
          <p><a href="">Careers</a></p>
          <p><a href="">FAQs</a></p>
          <p><a href="">Contact Info</a></p>
          <p><a href="">Press</a></p>
          <p><a href="">Rise Impact</a></p>
        </div>
        <div>
          <h4>Explore</h4>
          <p><a href="">Investmet Club <img src={arrowSlightUp} alt="arrow up icon" /></a></p>
          <p><a href="">Blog <img src={arrowSlightUp} alt="arrow up icon" /></a></p>
        </div>
      </div>
      <div className='flex'>
        <div>
          <h4>Products</h4>
          <p><a href="">Rise App</a></p>
          <p><a href="">Wallets</a></p>
          <p><a href="">Asset Classes</a></p>
        </div>
        <address>
          <h4>Contact Us</h4>
          <p><a href="">0818 714 7405 <img src={arrowSlightUp} alt="arrow up icon" /></a></p>
          <p><a href="">hello@rise.capital <img src={arrowSlightUp} alt="arrow up icon" /></a></p>
          <p><a href="">Newsletter <img src={arrowSlightUp} alt="arrow up icon" /></a></p>
          <p><a href="">Instagram <img src={arrowSlightUp} alt="arrow up icon" /></a></p>
          <p><a href="">Twitter <img src={arrowSlightUp} alt="arrow up icon" /></a></p>
        </address>
      </div>
    </div>
  )
}

export default Footer