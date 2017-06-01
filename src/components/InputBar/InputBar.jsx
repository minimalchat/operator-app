import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button/Button.jsx';
import { addMessage } from '../../store/Chat';
import './InputBar.css';

class InputBar extends Component {
  static propTypes = {
    operator: PropTypes.string,
    activeId: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    chatText: '',
  }

  // dummy function to stub out sending message via socket
  // this will eventually happen via redux actions.
  sendChat = () => {
    const { chatText } = this.state;
    const { dispatch, activeId, operator } = this.props;

    console.log('dispatch action for sending chat message here');

    dispatch(addMessage({
      author: operator,
      chat: activeId,
      content: chatText,
      timestamp: (new Date()).toISOString(),
    }));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render () {
    return (
      <div className="InputBar">
        <textarea onChange={this.handleChange} name="chatText" placeholder="text here, dummy" />
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
