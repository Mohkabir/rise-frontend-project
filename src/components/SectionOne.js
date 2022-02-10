import React from 'react';
import arrowRight from '../asset/images/arrow-right.svg';
import image1 from '../asset/images/image1.png';
import image2 from '../asset/images/image2.png';
import image3 from '../asset/images/image3.png';
import image4 from '../asset/images/image4.png';


const SectionOne = () => {

  const investing = [
    {
      img: image1
    },
    {
      title: 'Invest your money in dollars',
      text: 'By holding your investments in a stable currency, your money grows more over time and retains its value better.'
    },
    {
      img: image2
    },
    {
      title: "Choose what's best for you",
      text: 'Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. '
    },
    {
      img: image3
    },
    {
      title: "Set goals and reach them",
      text: 'You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. '
    },
    {
      img: image4
    },
    {
      title: "We remember so you dont have to",
      text: 'Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. '
    },
  ]

  return (
    <div className='sectionOne wrapper'>
      {
        investing.map((invest, index) => (
          <div key={index}>
            {
              invest.img ? (
                <img src={invest.img} alt='' />
              ): (
                <>
                  <h3>{invest.title}</h3>
                  <p>{invest.text}</p>
                  <a className='primary' href=''>Start Investing Now {' '} 
                    <img src={arrowRight} alt="arrowRight icon" />
                  </a>
                </>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default SectionOne