import React from 'react';

import { shallow } from 'enzyme';

import ClientList from './ClientList.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    chat: {
      operatorFilter: 'all',
    },
  })),
};


describe('ClientList', () => {
  const chats = [
    { client: { first_name: 'Robert', last_name: 'waffle' } },
    { client: { first_name: 'Lisa', last_name: 'pancake' } },
  ];

  it('matches snapshot', () => {
    const component = shallow(<ClientList chats={chats}store={store} />);
    expect(component).toMatchSnapshot();
  });
});
