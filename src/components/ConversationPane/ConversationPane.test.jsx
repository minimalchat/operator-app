import React from 'react';

import { shallow } from 'enzyme';

import ConversationPane from './ConversationPane.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('Chat', () => {
  it('matches snapshot', () => {
    const component = shallow(<ConversationPane store={store} />);

    expect(component).toMatchSnapshot();
  });
});
