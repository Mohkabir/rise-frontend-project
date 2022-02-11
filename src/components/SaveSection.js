import React from 'react';
import { Link } from "react-router-dom";

import buildWeight from '../asset/images/build-weight.svg';

const SaveSection = () => {
  return (
    <div className='saveSection flex_around wrapper'>
      <div>
        <img src={buildWeight} alt="build Weight image" />
      </div>
      <div>
        <p><strong>The  Rise App</strong></p>
        <h2>Save for your <span style={{color: "#8C5FF8"}}>future</span></h2>
        <p>With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.</p>
        <button><Link to="" className='button_link'>Start Saving</Link></button>
      </div>
    </div>
  )
}

export default SaveSection