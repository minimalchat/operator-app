import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// I dislike this imports name so hard :E
import 'whatwg-fetch';

import { NonIdealState } from '@blueprintjs/core';


// TODO: Move this to somewhere that makes sense
const API_URI = 'http://localhost:8000';

export class MessagePaneComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  constructor (props) {
    super(props);

    this.state = {
      currentChat: null,
      messages: [],
    }
  }

  componentDidUpdate () {
    const { activeChat } = this.props;
    const { currentChat } = this.state;

    console.log('UPDATE');

    // Dont make a request to the API if we dont have an active chat,
    //  or the current chat is the same (i.e. we did a update)
    if (activeChat === null || activeChat === currentChat) {
      return;
    }


    const route = `${API_URI}/api/chat/${activeChat}/messages`;

    fetch(route)
      .then(this.apiWillMount)
      .then(this.apiParse)
      .then(this.apiDidMount.bind(this))
      .catch(this.apiDidNotMount);
  }

  apiWillMount (response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    let error = new Error(response.statusText);
    error.response = response;

    throw error;
  }

  // TODO: I feel like this can be simplified and removed
  apiParse (response) {
    return response.json();
  }

  apiDidMount (response) {
    const messages = response.messages || [];

    console.log('XHR SUCCESS', response);

    this.setState({
      currentChat: this.props.activeChat,
      messages,
    })
  }

  apiDidNotMount (response) {
    console.log('FAIL', response);
  }

  render () {
    const { messages } = this.state;
    let desc = <span>Womps! But we have so much to say!</span>;
    let layout = (
      <NonIdealState
        title="No Conversations"
        description={desc}
        visual="chat"
      />
    );


    if (!messages.length) {
      // layout = (
      //   <MessageTopBar />
      //   <MessageList />
      //   <InputBar />
      // );
      layout = null
    }

    return (
      <div id="messages">
        {layout}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // activeChat: state.chat.active
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const MessagePane = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagePaneComponent);

export default MessagePane;
