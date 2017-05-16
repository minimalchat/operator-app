import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),

  getState: jest.fn(() => ({
    chat: {
      messages: [],
      config: {},
    },
  })),
};


describe('MessageList', () => {
  it('matches snapshot', () => {
    const component = shallow(<MessageList store={store} />);
    expect(component).toMatchSnapshot();
  });
});
