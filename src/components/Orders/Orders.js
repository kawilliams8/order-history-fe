import React from 'react';
import './Orders.css';
import Order from '../Order/Order';

const Orders = ( { data }) => {
  const orderCards = data.map(order => {
    return <Order data={order}/>
  })

  return (
    <main>
      {orderCards}
    </main>
  )
}

export default Orders;