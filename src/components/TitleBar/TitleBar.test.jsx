import React from 'react';

import { shallow } from 'enzyme';

import TitleBar from './TitleBar.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('TitleBar', () => {
  it('matches snapshot', () => {
    const component = shallow(<TitleBar store={store} />);

    expect(component).toMatchSnapshot();
  });
});
