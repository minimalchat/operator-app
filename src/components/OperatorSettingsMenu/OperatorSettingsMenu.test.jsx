import React from 'react';

import { shallow } from 'enzyme';

import OperatorSettingsMenu from './OperatorSettingsMenu.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('OperatorSettingsMenu', () => {
  it('matches snapshot', () => {
    const component = shallow(<OperatorSettingsMenu store={store} />);

    expect(component).toMatchSnapshot();
  });
});
