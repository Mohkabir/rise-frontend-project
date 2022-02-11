import React from 'react';

import review1 from '../asset/images/review1.png';
import review2 from '../asset/images/review2.png';
import review3 from '../asset/images/review3.png';

const Review = () => {

  const reviews = [
    {
      comment: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      name: "Lade",
      profileImg: review1
    },
    {
      comment: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      name: "Jesse",
      profileImg: review2
    },
    {
      comment: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      name: "Raye",
      profileImg: review3
    }
  ]

  return (
    <div className='reviews'>
      <div className='center wrapper_50'>
        <h2 className='primary'>From The People Who Use Rise</h2>
        <p>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
      </div>
     <div>
        <div className='scroll'>
          { reviews.map( (review, index) => (
            <div className='card'>
              <p>{review.comment}</p>
              <span style={{display:"flex", alignItems:'center'}}>
                <img style={{marginRight:'5px'}} src={review.profileImg} alt="customer profile picture" />
                <span>{review.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Review