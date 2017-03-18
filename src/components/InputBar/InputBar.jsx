import React, { Component } from 'react';

import Button from '../Button/Button.jsx';
import './InputBar.css';

class InputBar extends Component {

  state = {
    chatText: '',
  }

  sendChat = () => {
    console.log('aldkfjalkd');
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
        <Button variant="send" onClick={() => {}}>Send</Button>
      </div>
    );
  }
}

/* const InputBar = () => (
 *   <div className="InputBar">
 *     <textarea placeholder="text here, dummy" />
 *     <Button variant="send" onClick={() => {}}>Send</Button>
 *   </div>
 * );
 * */
export default InputBar;
