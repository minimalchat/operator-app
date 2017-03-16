/**
  * @summary: Displays a contact cards for a chat conversation
  * TODO: Style odd / even cards.
  * TODO: style based on currently selected card.
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setActiveChat } from '../../store/Chat/actions';
import './ClientCard.css';

const ClientCard = props => (
  <li className="ClientCard" >
    <button
      className="ClientCard__btn"
      onClick={() => props.setActiveChat(props.chatId)}
    >
      {props.children}
    </button>
  </li>
);

const mapStateToProps = state => ({

});


const mapDispatchToProps = dispatch => ({
  setActiveChat: chatId => dispatch(setActiveChat(chatId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientCard);


ClientCard.propTypes = {
  chatId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setActiveChat: PropTypes.func.isRequired,
};