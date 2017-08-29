/**
  * @summary: Displays a contact cards for a chat conversation
  * TODO: Style odd / even cards.
  * TODO: style based on currently selected card.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveChat, loadMessages } from '../../store/Chat';
import './ClientCard.css';

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
    const { messages } = this.props;

    console.log('LAST MESSAGE', messages);

    if (messages.length > 0) {
      if (messages[messages.length - 1].hasOwnProperty('content') &&
        messages[messages.length - 1].content.length > 0) {
        return messages[messages.length - 1].content[
          messages[messages.length - 1].content.length - 1
        ];
      }

      return messages[messages.length];
    }

    return '';
  }

  select () {

  }

  render () {
    const { chat, config, activeId } = this.props;
    const classes = [
      'ClientCard',
      (activeId === chat.id) ? 'active' : '',
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
              <span className="ClientCard__status" />
            </div>
            <div className="ClientCard__information-row">
              <p className="ClientCard__lastmsg">{this.getChatLastMessage()}&hellip;</p>
              <span className="ClientCard__lastmsgtime">2 minutes ago</span>
            </div>
          </div>
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  config: state.chat.config,
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

