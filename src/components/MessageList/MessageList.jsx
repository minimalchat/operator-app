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
    messages: PropTypes.array.isRequired,
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

  render () {
    const { messages, activeId } = this.props;
    const activeMsgs = messages.filter(msg => msg.chat === activeId);

    // render a map of <Message> components with their contents.
    const renderView = () => {
      if (!activeId) return (<div className="MessageList__empty"> No chat selected </div>);

      return activeMsgs.map((msg, index) => {
        const key = `${index}_${msg.chat}`;
        return <Message key={key} type={msg.author}>{msg.content}</Message>;
      });
    };


    return (
      <div className="MessageList">
        <ul className="MessageList__box">
          { renderView() }
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  messages: state.chat.messages.sort((curr, next) => (
    new Date(curr.timestamp) - new Date(next.timestamp)
  )),
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

