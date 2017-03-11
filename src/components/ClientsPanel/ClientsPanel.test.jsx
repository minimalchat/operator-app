import React from 'react';

import { shallow } from 'enzyme';

import ClientsPanel from './ClientsPanel.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    chat: { chats: [] },
  })),
};

describe('ClientsPanel', () => {
  it('matches snapshot', () => {
    const component = shallow(<ClientsPanel chats={[]} store={store} />);

    expect(component).toMatchSnapshot();
  });
});
