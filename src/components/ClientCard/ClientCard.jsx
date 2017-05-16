/**
  * @summary: Displays a contact cards for a chat conversation
  * TODO: Style odd / even cards.
  * TODO: style based on currently selected card.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveChat, loadMessages } from '../../store/Chat';
import './ClientCard.css';

const ClientCard = props => (
  <li className="ClientCard" >
    <button
      className="ClientCard__btn"
      onClick={() => {
        props.setActiveChat(props.chat);

        props.loadMessages(props.config, props.chat.id);
      }}
    >
      {props.children}
    </button>
  </li>
);

ClientCard.propTypes = {
  chat: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  setActiveChat: PropTypes.func.isRequired,
  loadMessages: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  config: state.chat.config,
});

const mapDispatchToProps = dispatch => ({
  setActiveChat: chat => dispatch(setActiveChat(chat)),
  loadMessages: (config, id) => loadMessages(dispatch, config, id),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientCard);

