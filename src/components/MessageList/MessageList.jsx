import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadMessages } from '../../store/Chat';
import Message from '../Message/Message.jsx';

import './MessageList.css';


/**
 * @summary: MessageList is responsible for handling the display of messages.
 */

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    chat: PropTypes.object.isRequired,
    chats: PropTypes.object,
    config: PropTypes.object.isRequired,
    activeId: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount () {
    const { activeId } = this.props;

    if (this.props.config.apiServer && activeId) {
      loadMessages(this.props.dispatch, this.props.config, activeId);
    }
  }

  renderEmpty () {
    if (Object.keys(this.props.chats).length === 0) {
      return (
        <div className="MessageList__empty">
          <div className="ss-icon ss-ghost lil-ghost" />
          <div>You have no chats!</div>
          <div style={{ fontSize: '12px', padding: '10px' }}>We still love you.</div>
        </div>
      );
    }

    if (this.props.chat.hasOwnProperty('open')) {
      return (
        <div className="MessageList__empty">
          <div className="ss-icon ss-mailbox lil-mailbox" />
          <div>No chat selected</div>
          <div style={{ fontSize: '12px', padding: '10px' }}>Click a chat on the left to get started!</div>
        </div>
      );
    }

    return null;
  }

  renderTyping () {
    // TODO: Make this somehow not a giant eyesore on this file
    return (
      <div>
        <ul>
          <li className="Message__client-typing">
            <svg width="32" height="20">
              <circle id="typing-circle-1" r="3" cx="8" cy="16" fill="#aeaeae" />
              <animate
                xlinkHref="#typing-circle-1"
                attributeName="cy"
                from="16"
                to="16"
                values="16; 12; 16;"
                dur="500ms"
                repeat="always"
                begin="0s"
                repeatCount="indefinite"
                fill="freeze"
                id="typing-1"
              />
              <circle id="typing-circle-2" r="3" cx="16" cy="16" fill="#aeaeae" />
              <animate
                xlinkHref="#typing-circle-2"
                attributeName="cy"
                from="16"
                to="16"
                values="16; 12; 16;"
                dur="500ms"
                begin="typing-1.begin + 250ms"
                repeatCount="indefinite"
                fill="freeze"
                id="typing-2"
              />
              <circle id="typing-circle-3" r="3" cx="24" cy="16" fill="#aeaeae" />
              <animate
                xlinkHref="#typing-circle-3"
                attributeName="cy"
                from="16"
                to="16"
                values="16; 12; 16;"
                dur="500ms"
                begin="typing-2.begin + 250ms"
                repeatCount="indefinite"
                fill="freeze"
                id="typing-3"
              />
            </svg>
          </li>
        </ul>
      </div>
    );
  }

  render () {
    const { messages, chat, activeId } = this.props;
    const activeMsgs = messages.filter(msg => msg.chat === activeId);

    // Render a map of <Message> components with their contents.
    const renderView = () => {
      if (!activeId) return this.renderEmpty();

      return activeMsgs.map((msg, index) => {
        const key = `${index}_${msg.chat}`;
        return (
          <Message
            key={key}
            author={msg.author}
            content={msg.content}
            timestamp={msg.timestamp}
          />
        );
      });
    };

    return (
      <div className="MessageList">
        <ul className="MessageList__box">
          { renderView() }
          <li style={{ display: chat.typing ? 'block' : 'none' }} className="Message__client typing">
            {this.renderTyping()}
          </li>
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  messages: state.chat.messages.sort((curr, next) => (
    new Date(curr.timestamp) - new Date(next.timestamp)
  )),
  typing: state.chat.typing,
  chat: state.chat.activeId ? state.chat.chats[state.chat.activeId] : {},
  chats: state.chat.chats,
  config: state.config,
  activeId: state.chat.activeId,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageList);
