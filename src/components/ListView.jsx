import React from 'react';
import ShopItem from './ShopItem';

export default function ListView({items}) {
  return (
    <div className="items_container">
      {[...items].map(item => (
        <ShopItem
          key = {item.key}
          img = {item.img}
          model = {item.name}
          color = {item.color}
          price = {item.price}
        />
      ))}
    </div>
  )
}
