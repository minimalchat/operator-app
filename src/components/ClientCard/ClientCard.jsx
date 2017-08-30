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

  getChatLastMessage () {
    const { messages, chat, activeId } = this.props;
    let filteredMessages = messages.filter(msg => (
      msg.chat === chat.id && msg.author === `client.${msg.chat}`
    ));

    if (filteredMessages.length > 0) {
      return filteredMessages[filteredMessages.length - 1];
    }

    return false;
  }

  select () {

  }

  render () {
    const { chat, config, activeId } = this.props;
    const lastMessage = this.getChatLastMessage();
    const classes = [
      'ClientCard',
      (activeId === chat.id) ? 'active' : '',
    ];
    const statusClasses = [
      'ClientCard__status',
      (lastMessage.timestamp &&
        (new Date(lastMessage.timestamp) >= new Date().getTime() - ONLINE_TIMEOUT)) ?
      'online' :
      'offline',
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
              {lastMessage ? (
                <p className="ClientCard__lastmsg">
                  {lastMessage.content ?
                      lastMessage.content[lastMessage.content.length - 1] :
                       ''}
                  &hellip;
                </p>
              ) : null}
              {lastMessage.timestamp ? (
                <span className="ClientCard__lastmsgtime">
                  {moment(lastMessage.timestamp).fromNow()}
                </span>
              ) : null }
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

