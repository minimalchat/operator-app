import React from 'react';

import { shallow } from 'enzyme';

import ClientList from './ClientList.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    chat: {
      operatorFilter: 'all',
      chats: {
        'id-0': { client: { first_name: 'Robert', last_name: 'waffle' } },
        'id-1': { client: { first_name: 'Lisa', last_name: 'pancake' } },
      },
      config: {},
    },
  })),
};


describe('ClientList', () => {
  const query = '';
  it('matches snapshot', () => {
    const component = shallow(<ClientList query={query} store={store} />);
    expect(component).toMatchSnapshot();
  });
});
