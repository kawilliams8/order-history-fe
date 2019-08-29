import React from 'react';
import '../Order/Order.css';

const Order = ({ data, removeOrder }) => {
  const { id, img, name, description, price } = data;
  return (
    <article className="Order">
      <img className="productImage" src={img} alt={description}/>
      <h3 className="productName" >{name}</h3>
      <h3 className="productDescription" >{description}</h3>
      <h3 className="productPrice" >${price}</h3>
      <button className="deleteButton" onClick={() => removeOrder(id)}>Remove From History</button>
    </article>
  )
}

export default Order;