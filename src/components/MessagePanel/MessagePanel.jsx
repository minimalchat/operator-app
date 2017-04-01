import React from 'react';
import MessageMenuBar from '../MessageMenuBar/MessageMenuBar.jsx';
import MessageList from '../MessageList/MessageList.jsx';
import InputBar from '../InputBar/InputBar.jsx';
import './MessagePanel.css';

const MessagePanel = () => (
  <div className="MessagePanel panel">
    <MessageMenuBar />
    <MessageList />
    <InputBar />
  </div>
);

export default MessagePanel;
