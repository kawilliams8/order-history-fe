import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should update state when addOrder is called', async () => {
    const wrapper = await shallow(<App />);
    const mockOrder = {
      id: 1,
      img: "image.png",
      name: "Mock Order",
      description: "This is a mock description",
      price: 3
      }

    const expected = [mockOrder];
    expect(wrapper.state('orders')).toEqual([]);
    await(wrapper.instance().addOrder(mockOrder))
    expect(wrapper.state('orders')).toEqual(expected)
    })
  
})