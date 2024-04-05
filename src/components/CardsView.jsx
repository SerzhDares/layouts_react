import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView({cards}) {
  return (
    <div className="cards_container">
      {[...cards].map(card => (
        <ShopCard
          key = {card.key}
          model = {card.name}
          color = {card.color}
          img = {card.img}
          price = {card.price}
        />
      ))}
    </div>
  )
}
