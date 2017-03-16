import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.jsx';
import { toggleChatOpen } from '../../store/Chat/actions'
import './MessageMenuBar.css';


const MessageMenuBar = (props) => {
  const {activeChat, toggleOpen} = props;

  return (
    <div className="MessageMenuBar">
      {/* <Button onClick={() => {}}>Assign to other</Button> */} {/* TODO: 0.2*/ }
      <Button onClick={() => toggleOpen(activeChat)}>Mark as done</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  activeChat: state.chat.active,
});

const mapDispatchToProps = dispatch => ({
  toggleOpen: chatId => dispatch(toggleChatOpen(chatId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageMenuBar);
