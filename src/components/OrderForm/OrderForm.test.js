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
    const mockEvent = {target: {name: "name", value: "Item Name"}};
    const expected = "Item Name";
    wrapper.instance().handleTyping(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should call the addOrder method when you click', () => {
    wrapper.instance().addOrder = jest.fn();
    const mockEvent = {preventDefault: jest.fn()};
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);
    expect(wrapper.instance().addOrder).toHaveBeenCalled();
  })
})