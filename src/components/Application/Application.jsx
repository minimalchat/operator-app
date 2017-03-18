import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';
import Settings from '../Settings/Settings.jsx';
import initSockets from './Sockets.js';
import './Application.css';

const socketPath = 'http://localhost:8000';

const Application = (props) => {
  const socket = io.connect(socketPath, {
    reconnectionAttempts: 10,
  });

  initSockets(socket);


  const renderMainView = () => (
    props.settingsOpen ? <Settings /> :

    <div className="App__mainview">
      <ClientsPanel />
      <MessagePanel />
    </div>
  );

  return (
    <div className="App">
      <OperatorPanel />
      { renderMainView() }
    </div>
  );
};


Application.propTypes = {
  settingsOpen: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  settingsOpen: state.ui.settingsOpen,
});

export default connect(mapStateToProps, null)(Application);
