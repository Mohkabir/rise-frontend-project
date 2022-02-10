import React from 'react';
import Card from './widget/Card';
import asset1 from '../asset/images/asset1.png';
import asset2 from '../asset/images/asset2.png';
import asset3 from '../asset/images/asset3.png';


const cardInfo = {
  card1: {
    bg: '#FFF4F0',
    image: asset1,
    title:'Stocks',
    textOne: 'We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.'
  },
  card2: {
    bg: '#F6F2FF',
    image: asset2,
    title:'Real Estate',
    textOne: 'Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.'
  },
  card3: {
    bg: '#ECFEFE',
    image: asset3,
    title:'Fixed Income',
    textOne: 'A low-risk asset perfect for anyone who wants to protect their money in a secure, For people who want money from inflation while earning steady returns.'
  },

}

const AssetClasses = () => {
  return (
    <div className=' wrapper'>
      <div className='center'>
        <h2>Asset Classes</h2>
        <p>It’s your money, choose where you invest it</p>
      </div>
      <div className='flex_between card_container'>
        <Card card={cardInfo.card1} />
        <Card card={cardInfo.card2} />
        <Card card={cardInfo.card3} />
      </div>
    </div>
  )
}

export default AssetClasses