import React from 'react';

import { shallow } from 'enzyme';

import MessageMenuBar from './MessageMenuBar.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('MessageMenuBar', () => {
  it('matches snapshot', () => {
    const component = shallow(<MessageMenuBar store={store} />);

    expect(component).toMatchSnapshot();
  });
});
