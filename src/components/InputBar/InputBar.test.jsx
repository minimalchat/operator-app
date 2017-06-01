import React from 'react';

import { shallow } from 'enzyme';

import InputBar from './InputBar.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    chat: {
      activeId: 'TEST',
      config: {
        operator: 'TEST',
      },
    },
  })),
};

describe('InputBar', () => {
  it('matches snapshot', () => {
    const component = shallow(<InputBar store={store} socket={{}} />);

    expect(component).toMatchSnapshot();
  });
});
