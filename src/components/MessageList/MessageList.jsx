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


  const renderView = () => {
    if (!active) return (<div className="MessageList__empty"> No chat selected </div>);
    return activeMsgs.map(msg => (<div className="ML-m-client">{msg.content}</div>));
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
