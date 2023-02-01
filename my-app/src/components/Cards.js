import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>External Links:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images\GitHub-Logo.png'
              text='Check out my GitHub page!'
              label='Social'
              path='https://github.com/Kriishu'
            />
            <CardItem
              src='images\Accenture-Logo.png'
              text='Check out Accenture page!'
              label='External Link'
              path='https://www.accenture.com/'
            />
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Cards;