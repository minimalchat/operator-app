import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button/Button.jsx';
import { toggleChatOpen } from '../../store/Chat';
import './MessageMenuBar.css';


const MessageMenuBar = (props) => {
  const { activeChatId, activeChatIsOpen, toggleOpen } = props;
  const renderBtnMsg = () => {
    if (!activeChatId) return 'Select a chat';
    if (activeChatId && activeChatIsOpen) return 'Mark as Done';
    return 'Unarchive Chat';
  };

  return (
    <div className="MessageMenuBar">
      {/* <Button onClick={() => {}}>Assign to other</Button> */} {/* TODO: 0.2*/ }
      <Button onClick={() => toggleOpen(activeChatId)}>{renderBtnMsg()}</Button>
    </div>
  );
};


MessageMenuBar.propTypes = {
  activeChatId: PropTypes.string.isRequired,
  activeChatIsOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  activeChatId: state.chat.activeId,
  activeChatIsOpen: state.chat.activeIsOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleOpen: chatId => dispatch(toggleChatOpen(chatId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageMenuBar);
