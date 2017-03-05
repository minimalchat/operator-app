import React from 'react';

import { shallow } from 'enzyme';

import ClientList from './ClientList.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('ClientList', () => {
  it('matches snapshot', () => {
    const component = shallow(<ClientList store={store} />);

    expect(component).toMatchSnapshot();
  });
});
