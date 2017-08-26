import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button/Button.jsx';
import { sendMessage, operatorTyping } from '../../store/Chat';
import './InputBar.css';

// TODO: Move to a constants file
const KEY_ENTER = 13;

class InputBar extends Component {
  static propTypes = {
    operator: PropTypes.string,
    activeId: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    chatText: '',
  }

  onKeyPress = (e) => {
    const { key, keyCode, shiftKey, ctrlKey, altKey } = e;
    const { dispatch, activeId, operator } = this.props;
    console.log(`INPUT KEYPRESS ${key} (${keyCode}), SHIFT ${shiftKey}, CTRL ${ctrlKey}, ALT ${altKey}`);

    if (keyCode === KEY_ENTER) {
      if (!shiftKey) {
        console.log('SENDING MESSAGE ...');

        this.sendChat();
        this.setState({ [e.target.name]: '' });

        event.preventDefault();
      }
    } else {
      dispatch(operatorTyping(this.formatMessage(null, operator, activeId)));
    }
  }

  formatMessage = (content, operatorID, chatID) => ({
    timestamp: (new Date()).toISOString(),
    author: `operator.${operatorID}`,
    content,
    chat: chatID,
  })

  // Dummy function to stub out sending message via socket
  //  this will eventually happen via redux actions.
  sendChat = () => {
    const { chatText } = this.state;
    const { dispatch, activeId, operator } = this.props;

    dispatch(sendMessage(this.formatMessage(chatText, operator, activeId)));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render () {
    return (
      <div className="InputBar">
        <input
          onChange={this.handleChange}
          onKeyDown={this.onKeyPress}
          name="chatText"
          value={this.state.chatText}
          placeholder="Say something meaningful &hellip;"
        />
        <Button variant="send" onClick={this.sendChat} >Send</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeId: state.chat.activeId,
  operator: state.chat.config.operator,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputBar);
