import React from 'react';
import '../Order/Order.css';

const Order = ({ data }) => {
  const { id, img, name, description, price } = data;
  return (
    <article className="Order">
      <h3>{id}</h3>
      <h3>{img}</h3>
      <h3>{name}</h3>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </article>
  )
}

export default Order;