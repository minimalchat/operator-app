/**
  * @summary: Displays a contact cards for a chat conversation
  * TODO: Style odd / even cards.
  * TODO: style based on currently selected card.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';

import { setActiveChat, loadMessages } from '../../store/Chat';

import './ClientCard.css';

// TODO: Improve this by pulling ping/pong from daemon's connection with the
//   client.
// If a client is not active for 2 minutes, consider them offline
const ONLINE_TIMEOUT = 120000;

class ClientCard extends Component {
  static propTypes = {
    chat: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    config: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    loadMessages: PropTypes.func.isRequired,
    activeId: PropTypes.string,
  }

  getClientMessages () {
    const { messages, chat } = this.props;

    return messages.filter(msg => (
      msg.chat === chat.id && msg.author === `client.${msg.chat}`
    ));
  }

  getLastMessage () {
    const filteredMessages = this.getClientMessages();

    if (filteredMessages.length > 0) {
      return filteredMessages[filteredMessages.length - 1];
    }

    return {};
  }

  isOnline () {
    const lastMessage = this.getLastMessage();

    if (lastMessage.hasOwnProperty('timestamp')) {
      // Make the timestamp into a date object so we can do some comparisons
      const lastMessageTime = new Date(lastMessage.timestamp);

      // Current time minus the ONLINE_TIMEOUT static value
      const onlineThreshold = new Date().getTime() - ONLINE_TIMEOUT;

      return lastMessageTime >= onlineThreshold;
    }

    return false;
  }

  isActive () {
    const { chat, activeId } = this.props;

    return activeId === chat.id;
  }

  renderLastMessage () {
    const lastMessage = this.getLastMessage();

    if (lastMessage.hasOwnProperty('content') &&
      lastMessage.content.hasOwnProperty('length') &&
      lastMessage.content.length > 0) {
      const lastMessageContent = lastMessage.content;

      return (
        <p className="ClientCard__lastmsg">
          {lastMessageContent[lastMessageContent.length - 1]}&hellip;
        </p>
      );
    }

    return null;
  }

  renderLastMessageTimestamp () {
    const lastMessage = this.getLastMessage();

    if (lastMessage.hasOwnProperty('timestamp')) {
      return (
        <span className="ClientCard__lastmsgtime">
          {moment(lastMessage.timestamp).fromNow()}
        </span>
      );
    }

    return null;
  }

  render () {
    const { chat, config, activeId } = this.props;
    const classes = [
      'ClientCard',
      this.isActive() ? 'ClientCard--active' : '',
    ];
    const statusClasses = [
      'ClientCard__status',
      this.isOnline() ? 'ClientCard__status--online' : 'ClientCard__status--offline',
    ];

    return (
     <li className={classes.join(' ')}>
        <button
          onClick={() => {
            this.props.setActiveChat(chat);

            this.props.loadMessages(config, chat.id);
          }}
          className="ClientCard__btn"
        >
          <div className="ClientCard__icon ss-icon">
            <span>user</span>
          </div>
          <div className="ClientCard__information">
            <div className="ClientCard__information-row">
              <span className="ClientCard__name">{this.props.children}</span>
              <span className={statusClasses.join(' ')} />
            </div>
            <div className="ClientCard__information-row">
              {this.renderLastMessage()}
              {this.renderLastMessageTimestamp()}
            </div>
          </div>
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  config: state.config,
  messages: state.chat.messages,
  activeId: state.chat.activeId,
});

const mapDispatchToProps = dispatch => ({
  setActiveChat: chat => dispatch(setActiveChat(chat)),
  loadMessages: (config, id) => loadMessages(dispatch, config, id),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientCard);

