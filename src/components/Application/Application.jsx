import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ConversationList from '../Conversations/ConversationList.jsx'
import MessageList from '../Messages/MessageList.jsx'

export class Application extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props);

  }

  render() {
    return (
      <div className="pt-app">
        <ConversationList />
        <MessageList />
      </div>
    );
  }
}

export default connect(
  state => ({ }),
  dispatch => ({ dispatch }),
)(Application);
