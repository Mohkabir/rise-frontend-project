import React from 'react';
import { Link } from "react-router-dom";

import arrowRight from '../../asset/images/arrow-right.svg';

const Card = ({card}) => {

  const { textOne, textTwo, image, bg, title } = card;
  return (
    <div className='card'>
      <div style={{background : bg}}>     
      </div>
      <div className='asset_wrapper'>
          <img src={image} alt="asset image" />
        </div>
      <div className='box2'>
        <h3> {title} </h3>
        <p> {textOne} </p>
        <p> {textTwo} </p>
        <p>
          <span ><span style={{color:'#919FB5'}}>Historical returns:</span> 14% per annum</span>
          <br />
          <span><span style={{color:'#919FB5'}}>Risk Level:</span> Medium</span>
        </p>
        <Link to="/" className='primary button_link'>Learn how Stocks work 
        <img src={arrowRight} alt="arrowRight icon" />
        </Link>
      </div>
    </div>
  )
}

export default Card