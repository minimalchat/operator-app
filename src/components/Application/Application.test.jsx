import React from 'react';

import { shallow } from 'enzyme';

import Application from './Application.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    ui: { settingsOpen: false },
  })),
};

describe('Chat', () => {
  it('matches snapshot', () => {
    const component = shallow(<Application store={store} />);

    expect(component).toMatchSnapshot();
  });
});
