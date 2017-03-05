import React from 'react';

import { shallow } from 'enzyme';

import ClientsPanel from './ClientsPanel.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('ClientsPanel', () => {
  it('matches snapshot', () => {
    const component = shallow(<ClientsPanel store={store} />);

    expect(component).toMatchSnapshot();
  });
});
