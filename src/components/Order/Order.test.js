import React from 'react';
import { shallow } from 'enzyme';
import Order from '../Order/Order';

describe('Order', () => {

  it('should match the snapshot', () => {
    const mockOrder = {
      id: 1,
      img: "image.png",
      name: "Mock Order",
      description: "This is a mock description",
      price: 3
    }
    const wrapper = shallow(<Order data={mockOrder} key={1}/>)
    expect(wrapper).toMatchSnapshot()
  });

})