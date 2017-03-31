import React, { Component } from 'react';

import Button from '../Button/Button.jsx';
import './InputBar.css';

class InputBar extends Component {

  state = {
    chatText: '',
  }

  // dummy function to stub out sending message via socket
  // this will eventually happen via redux actions.
  sendChat = () => {
    console.log('dispatch action for sending chat message here');
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


export default InputBar;
