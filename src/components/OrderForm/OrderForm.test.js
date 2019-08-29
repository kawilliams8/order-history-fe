import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from '../OrderForm/OrderForm';

describe("Order Form", () => {
  let wrapper;
  beforeEach(() => {
    const addOrderMock = jest.fn()
    wrapper = shallow(<OrderForm addOrder={addOrderMock} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should update Form\'s state when typing', () => {
    const mockEvent = {target: {name: "name", value: "Item Nam"}}
  })
})