import React from 'react';

import { shallow } from 'enzyme';

import WelcomeScreen from './WelcomeScreen.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    config: {
      apiServer: '',
    },
  })),
};

describe('WelcomeScreen', () => {
  it('matches snapshot', () => {
    const component = shallow(<WelcomeScreen store={store} />);

    expect(component).toMatchSnapshot();
  });
});
