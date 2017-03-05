import React from 'react';

import { shallow } from 'enzyme';

import OperatorProfile from './OperatorProfile.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('OperatorProfile', () => {
  it('matches snapshot', () => {
    const component = shallow(<OperatorProfile store={store} />);

    expect(component).toMatchSnapshot();
  });
});
