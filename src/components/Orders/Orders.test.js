import React from 'react';
import { shallow } from 'enzyme';
import Orders from '../Orders/Orders';

describe('Orders', () => {
  
  it('should match the snapshot', () => {
    const mockOrders = [
      {id: 1,
      img: "image.png",
      name: "Mock Order 1",
      description: "This is a mock description",
      price: 3
      },
      {id: 2,
      img: 'image.png',
      name: "Mock Order 2",
      description: "This is a mock description",
      price: 45
      }
  ]
    const wrapper = shallow(<Orders data={mockOrders}/>)
    expect(wrapper).toMatchSnapshot();
  })
})