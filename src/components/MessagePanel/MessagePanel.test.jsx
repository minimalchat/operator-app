import React from 'react';

import { shallow } from 'enzyme';

import MessagePanel from './MessagePanel.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('MessagePanel', () => {
  it('matches snapshot', () => {
    const component = shallow(<MessagePanel store={store} />);

    expect(component).toMatchSnapshot();
  });
});
