import React from 'react';
import { Link } from "react-router-dom";

import joinCommunity from '../asset/images/join-community.png';


const JoinCommunity = () => {
  return (
    <div className='joinCommunity flex_around wrapper'>
      <div>
        <h2>Join The Rise Community</h2>
        <p>If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>
        <button><Link to="" className='button_link'>Join our Community</Link></button>
      </div>
      <div>
        <img src={joinCommunity} alt="join community image" />
      </div>
    </div>
  )
}

export default JoinCommunity