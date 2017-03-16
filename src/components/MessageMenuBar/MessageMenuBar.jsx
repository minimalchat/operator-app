import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.jsx';
import { toggleChatOpen } from '../../store/Chat/actions';
import './MessageMenuBar.css';


const MessageMenuBar = (props) => {
  const { activeChatId, activeChatIsOpen, toggleOpen } = props;
  const buttonMessage = () => activeChatIsOpen ? 'Mark as Done' : 'Unarchive message?';

  return (
    <div className="MessageMenuBar">
      {/* <Button onClick={() => {}}>Assign to other</Button> */} {/* TODO: 0.2*/ }
      <Button onClick={() => toggleOpen(activeChatId)}>{buttonMessage()}</Button>
    </div>
  );
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


MessageMenuBar.propTypes = {
  activeChatId: PropTypes.string.isRequired,
  activeChatIsOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
};
