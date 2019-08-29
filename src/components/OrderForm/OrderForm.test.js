import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from '../OrderForm/OrderForm';

describe("Order Form", () => {

  it('should match the snapshot', () => {
    const addOrderMock = jest.fn()
    const wrapper = shallow(<OrderForm addOrder={addOrderMock}/>)
    expect(wrapper).toMatchSnapshot()
  })
})