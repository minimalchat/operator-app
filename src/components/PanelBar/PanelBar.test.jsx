import React from 'react';

import { shallow } from 'enzyme';

import PanelBar from './PanelBar.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('PanelBar', () => {
  it('matches snapshot', () => {
    const component = shallow(<PanelBar store={store} />);

    expect(component).toMatchSnapshot();
  });
});
