import React, { Component } from 'react';
import '../App/App.css';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      orders: [],
      error: ""
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/purchases')
    .then(response => response.json())
    .then(data => this.setState({orders: data}))
    .catch(error => this.setState({error: error.message}))
  }

  addOrder = (newOrder) => {
    console.log(newOrder )
    const options = {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/api/v1/purchases', options)
    .then(response => response.json())
    .then(orders => console.log('posted orders', orders))
    // .catch()
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <OrderForm addOrder={this.addOrder}/>
          </div>
        </header>
        <div className='purchase-container'>
          <Orders data={this.state.orders}/>
        </div>
      </div>
    );
  }
}

export default App;
