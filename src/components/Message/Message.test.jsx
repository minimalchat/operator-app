
import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message.jsx';

/*
const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({})),
};
*/


describe('MessageList', () => {
  it('matches snapshot', () => {
    const component = shallow(<Message author={'operator.steve'} content={['test message']} />);
    expect(component).toMatchSnapshot();
  });
});
