import React from 'react'

export default function ShopItem({key, model, color, img, price}) {
  return (
    <div className="item" key={key}>
      <img className="item_img" src={img} alt={model}></img>
      <h3 className="card_model item_model">{model}</h3>
      <span className="card_color item_color">{color}</span>
      <span className="card_price item_price">${price}</span>
      <button className="card_add_button item_add_button">add to cart</button>
    </div>
  )
}
