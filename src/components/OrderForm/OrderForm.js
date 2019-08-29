import React, {Component} from 'react';
import '../OrderForm/OrderForm.css';
import notFound from '../../images/notfound.png'

class OrderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: "",
      name: "",
      description: "",
      price: ""
    }

  }

  handleTyping = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const newOrder = {
      ...this.state,
      id: Date.now(),
      img: {notFound}
    }
    const { addOrder } = this.props;
    addOrder(newOrder);
    this.setState({
      img: "",
      name: "",
      description: "",
      price: ""
    })
  }

  render() {
    return (
      <form className="OrderForm">
        <input className="nameInput" type="text" name="name" placeholder="Item Name" value={this.state.name} onChange={this.handleTyping}></input>
        <input className="descriptionInput" type="text" name="description" placeholder="Item Description" value={this.state.description} onChange={this.handleTyping}></input>
        <input className="priceInput" type="number" name="price" placeholder="Item Price" value={this.state.price} onChange={this.handleTyping}></input>
        <button className="submitButton" onClick={this.handleFormSubmit}>Add Purchase</button>
      </form>
    )
  }
}

export default OrderForm;