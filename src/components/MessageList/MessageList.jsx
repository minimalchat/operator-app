import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadMessages } from '../../store/Chat';
import Message from '../Message/Message.jsx';

import './MessageList.css';

/**
 * @summary: responsible for handling the display of messages.
 */

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    typing: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    activeId: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  static clientTypingRenderer () {
    return (
      <div className="MessageList__client-typing">Client is typing...</div>
    );
  }

  static emptyRenderer () {
    return (
      <div className="MessageList__empty"> No chat selected </div>
    );
  }

  componentWillMount () {
    const { activeId } = this.props;

    if (this.props.config.apiServer && activeId) {
      loadMessages(this.props.dispatch, this.props.config, activeId);
    }
  }

  render () {
    const { messages, typing, activeId } = this.props;

    const activeMsgs = messages.filter(msg => msg.chat === activeId);
    const clientTypingStatus = (activeId != null && typing[activeId])
      ? MessageList.clientTypingRenderer()
      : null;

    // render a map of <Message> components with their contents.
    const renderView = () => {
      if (!activeId) return MessageList.emptyRenderer();

      return activeMsgs.map((msg, index) => {
        const key = `${index}_${msg.chat}`;
        return <Message key={key} author={msg.author} content={msg.content} />;
      });
    };

    return (
      <div className="MessageList">
        <ul className="MessageList__box">
          { renderView() }
        </ul>

        <div className="MessageList__status">
          { clientTypingStatus }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  messages: state.chat.messages.sort((curr, next) => (
    new Date(curr.timestamp) - new Date(next.timestamp)
  )),
  typing: state.chat.typing,
  config: state.chat.config,
  activeId: state.chat.activeId,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageList);
