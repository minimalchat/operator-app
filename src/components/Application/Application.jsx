import React from 'react';
import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';
import './Application.css';

const Application = () => (
  <div className="App">
    <OperatorPanel />
    <ClientsPanel />
    <MessagePanel />
  </div>
);

export default Application;
