import React from 'react';

import vectorLeft1 from '../asset/images/vector-left1.png';
import vectorLeft2 from '../asset/images/vector-left2.png';
import vectorRight1 from '../asset/images/vector-right1.png';
import vectorRight2 from '../asset/images/vector-right2.png';


const RegulationSection = () => {
  return (
    <div className='regulationSection'>
      <div className='bg_vector'>
        <div>
          <img src={vectorLeft1} alt="" />
          <img className='lowwer_img' src={vectorLeft2} alt="" />
        </div>
        <div>
          <img src={vectorRight1} alt="" />
          <img className='lowwer_img' src={vectorRight2} alt="" />
        </div>
      </div>
      <div className='box2 wrapper center'>
        <h2>How we are Regulated</h2>
        <p>Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions</p>
      </div>
    </div>
  )
}

export default RegulationSection