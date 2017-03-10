import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessageList.css'

/**
 * @summary: responsible for handling the display of messages.
 */
export class MessageListComponent extends Component {

  render () {
    return (
      <div className="MessageList">
        <ul className="menu" />

        <span className="MessageList__message-client">I am a dummy client message</span>
        <span className="MessageList__message-operator">I am a dummy operator message</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const MessageList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageListComponent);

export default MessageList;
