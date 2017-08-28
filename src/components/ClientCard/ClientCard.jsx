/**
  * @summary: Displays a contact cards for a chat conversation
  * TODO: Style odd / even cards.
  * TODO: style based on currently selected card.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveChat, loadMessages } from '../../store/Chat';
import './ClientCard.css';

class ClientCard extends Component {
  static propTypes = {
    chat: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    loadMessages: PropTypes.func.isRequired,
  }

  select () {
    const { chat, config } = this.props;

    this.props.setActiveChat(chat);

    this.props.loadMessages(config, chat.id);
  }

  render () {
    return (
      <li className="ClientCard">
        <button
          onClick={this.select}
          className="ClientCard__btn"
        >
          <div className="ClientCard__icon ss-icon">
            <span>user</span>
          </div>
          <div className="ClientCard__information">
            <div className="ClientCard__information-row">
              <span className="ClientCard__name">{this.props.children}</span>
              <span className="ClientCard__status" />
            </div>
            <div className="ClientCard__information-row">
              <p className="ClientCard__lastmsg">Lorem ipsum dolor sit amet</p>
              <span className="ClientCard__lastmsgtime">2 minutes ago</span>
            </div>
          </div>
        </button>
      </li>
    );
  }
}

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

