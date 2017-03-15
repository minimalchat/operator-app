import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './MessageList.css';
import Message from '../Message/Message.jsx';

/**
 * @summary: responsible for handling the display of messages.
 */

const MessageList = (props) => {
  const { messages, active } = props;
  const activeMsgs = messages.filter(msg => msg.chat === active);


  // render a map of <Message> components with their contents.
  const renderView = () => {
    if (!active) return (<div className="MessageList__empty"> No chat selected </div>);
    return activeMsgs.map(msg => (<Message type={msg.author}>{msg.content}</Message>));
  };


  return (
    <div className="MessageList">
      <ul className="MessageList__box">
        { renderView() }
      </ul>
    </div>
  );
};


const mapStateToProps = state => ({
  messages: state.chat.messages,
  active: state.chat.active,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});


// hook into redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageList);



// Prop Validation
MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  active: PropTypes.string,
};
