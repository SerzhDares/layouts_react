import React from 'react'

export default function ShopCard({key, model, color, img, price}) {
  return (
    <div className="card" key={key}>
      <h3 className="card_model">{model}</h3>
      <span className="card_color">{color}</span>
      <img className="card_img" src={img} alt={model}></img>
      <div className="card_footer">
        <span className="card_price">${price}</span>
        <button className="card_add_button">add to cart</button>
      </div>
    </div>
  )
}
