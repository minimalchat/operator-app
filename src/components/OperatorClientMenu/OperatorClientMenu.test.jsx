import React from 'react';

import { shallow } from 'enzyme';

import OperatorClientMenu from './OperatorClientMenu.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('OperatorClientMenu', () => {
  it('matches snapshot', () => {
    const component = shallow(<OperatorClientMenu store={store} />);

    expect(component).toMatchSnapshot();
  });
});
