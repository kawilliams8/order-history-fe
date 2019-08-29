import React from 'react';
import { shallow } from 'enzyme';
import Order from '../Order/Order';

describe('Order', () => {
3
  let mockOrder;
  beforeEach(() => {
    mockOrder = {
      id: 1,
      img: "image.png",
      name: "Mock Order",
      description: "This is a mock description",
      price: 3
    }
  })

  it('should match the snapshot', () => {
    const removeOrderMock = jest.fn();
    const wrapper = shallow(<Order data={mockOrder} key={1} removeOrder={removeOrderMock} />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should call the removeOrder method and pass the id', () => {
    const removeOrderMock = jest.fn();
    const wrapper = shallow(<Order data={mockOrder} key={1} removeOrder={removeOrderMock}/>)
    wrapper.find('button').simulate('click')
    expect(removeOrderMock).toHaveBeenCalled();
    expect(removeOrderMock).toHaveBeenCalledWith(1);
  })

})