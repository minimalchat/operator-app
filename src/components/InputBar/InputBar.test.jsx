import React from 'react';

import { shallow } from 'enzyme';

import InputBar from './InputBar.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('InputBar', () => {
  it('matches snapshot', () => {
    const component = shallow(<InputBar store={store} />);

    expect(component).toMatchSnapshot();
  });
});
