import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setActiveChat } from '../../store/Chat/actions';
import './ClientCard.css'

const ClientCard = props => {
  return (
    <li className="ClientCard" onClick={() => props.setActiveChat(props.chatId)}>
      {props.children}
    </li>
  );
};

ClientCard.propTypes = {
  chatId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  setActiveChat: (chatId) => dispatch(setActiveChat(chatId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientCard);