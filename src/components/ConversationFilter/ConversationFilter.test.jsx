import React from 'react';

import { shallow } from 'enzyme';

import ConversationFilter from './ConversationFilter.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('Chat', () => {
  it('matches snapshot', () => {
    const component = shallow(<ConversationFilter store={store} />);

    expect(component).toMatchSnapshot();
  });
});
