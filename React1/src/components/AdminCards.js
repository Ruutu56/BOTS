import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './AdminCards.css';

function AdminCards() {
  return (
    <div className="styleObj1">
    <div className='cards'>
      <h1><p className="styleObj">Admin Dashboard</p></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
      
          <ul className='cards__items' style={{width:"1200px",paddingLeft:"50px"}}>
          <CardItem
              src='images/19.jpg'
              text='List of Grounds'
              label='Grounds'
              path='/dispgrounds'
            />
            <CardItem
              src='images/20.jpg'
              text='View Bookings'
              label='Bookings'
              path='/dispbookings'
            />
            <CardItem
              src='images/16.jpg'
              text='View Challenges'
              label='Challenges'
              path='/dispchallenges'
            />
          </ul>
     
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminCards;
