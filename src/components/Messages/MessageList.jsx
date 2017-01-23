import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { NonIdealState } from '@blueprintjs/core';

export class MessageList extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props);

  }

  render() {
    let desc = <span>Womps! But we have so much to say!</span>;

    return (
      <div id="messages">
        <NonIdealState
          title="No Conversations"
          description={desc}
          visual="chat" />
      </div>
    );
  }
}

export default connect(
  state => ({ }),
  dispatch => ({ dispatch }),
)(MessageList);
