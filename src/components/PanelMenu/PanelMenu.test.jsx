import React from 'react';

import { shallow } from 'enzyme';

import PanelMenu from './PanelMenu.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('PanelMenu', () => {
  it('matches snapshot', () => {
    const component = shallow(<PanelMenu store={store} />);

    expect(component).toMatchSnapshot();
  });
});
