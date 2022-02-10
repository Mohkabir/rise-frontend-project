import React from 'react';
import joinInvesting from '../asset/images/phone2.png';
import googleApple from '../asset/images/apple-google.png';

const JoinInvesting = () => {
  return (
    <div className='joinInvesting wrapper'>
      <div className='flex_between'>
        <div>
          <p className='primary'>Download The Rise App</p>
          <h2>Join our 100,000 users investing and setting long term goals!</h2>
          <p>Dollar investments that help you grow.</p>
          <img src={googleApple} alt="googleApple icon" />
        </div>
        <div>
          <img src={joinInvesting} alt="join our Investing image" />
        </div>
      </div>
    </div>
  )
}

export default JoinInvesting