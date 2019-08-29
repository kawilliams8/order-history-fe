import React, { Component } from 'react';
import '../App/App.css';
import Orders from '../../components/Orders/Orders';

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

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>

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
