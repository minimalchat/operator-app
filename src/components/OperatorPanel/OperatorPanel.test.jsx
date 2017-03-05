import React from 'react';

import { shallow } from 'enzyme';

import OperatorPanel from './OperatorPanel.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('OperatorPanel', () => {
  it('matches snapshot', () => {
    const component = shallow(<OperatorPanel store={store} />);

    expect(component).toMatchSnapshot();
  });
});
