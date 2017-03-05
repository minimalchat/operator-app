import React from 'react';

import { shallow } from 'enzyme';

import Panel from './Panel.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('Panel', () => {
  it('matches snapshot', () => {
    const component = shallow(<Panel store={store} />);

    expect(component).toMatchSnapshot();
  });
});
