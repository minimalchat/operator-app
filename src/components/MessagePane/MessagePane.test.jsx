import React from 'react';

import { shallow } from 'enzyme';

import MessagePane from './MessagePane.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('Chat', () => {
  it('matches snapshot', () => {
    const component = shallow(<MessagePane store={store} />);

    expect(component).toMatchSnapshot();
  });
});
