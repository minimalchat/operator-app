import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './MessageList.css';

/**
 * @summary: responsible for handling the display of messages.
 */

const MessageList = (props) => {
  const { messages, active } = props;

  const activeMsgs = messages.filter(msg => (
     msg.chat === active
  ));

  const messageDisplay = activeMsgs.map(msg => (
    <div>{msg.content}</div>
  ));


  if (!active) return <div> no chats </div>;

  return (
    <div className="MessageList">
      <ul className="menu" />
      <span className="MessageList__message-client">I am a dummy client message</span>
      <span className="MessageList__message-operator">I am a dummy operator message</span>
      { messageDisplay }
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
