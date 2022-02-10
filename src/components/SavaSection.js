import React from 'react';
import buildWeight from '../asset/images/build-weight.svg';

const SavaSection = () => {
  return (
    <div className='savaSection flex_around wrapper'>
      <div>
        <img src={buildWeight} alt="build Weight image" />
      </div>
      <div>
        <p>The  Rise App</p>
        <h2>Save for your <span style={{color: "#8C5FF8"}}>future</span></h2>
        <p>With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.</p>
        <button><a href="">Start Saving</a></button>
      </div>
    </div>
  )
}

export default SavaSection