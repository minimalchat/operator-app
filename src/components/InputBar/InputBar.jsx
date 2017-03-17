import React from 'react';
import Button from '../Button/Button.jsx';
import './InputBar.css';

const InputBar = () => (
  <div className="InputBar">
    <textarea placeholder="text here, dummy" />
    <Button variant="send" onClick={() => {}}>Send</Button>
  </div>
);

export default InputBar;
