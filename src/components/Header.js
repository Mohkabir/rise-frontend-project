import React from 'react';
import googleApple from '../asset/images/apple-google.png';
import phone from '../asset/images/phone.png';

const Header = () => {
  return (
    <header className='flex_between wrapper header'>
      <div>
        <h1 className='primary'>Dollar investments that help you grow</h1>
        <p>We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
        <img src={googleApple} alt="apple store and google play image" />
      </div>
      <div>
        <img src={phone} alt="image of our mobile app" />
      </div>
    </header>
  )
}

export default Header