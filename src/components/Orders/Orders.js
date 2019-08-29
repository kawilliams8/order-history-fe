import React from 'react';
import './Orders.css';
import Order from '../Order/Order';

const Orders = ({ data, removeOrder }) => {
  
  const orderCards = data.map((order, index) => {
    return <Order data={order} key={index} removeOrder={removeOrder}/>
  })

  return (
    <main className="Orders">
      {orderCards}
    </main>
  )
}

export default Orders;