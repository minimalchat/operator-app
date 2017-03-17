import React from 'react';
import { connect } from 'react-redux';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';
import Settings from '../Settings/Settings.jsx';
import './Application.css';

const Application = props => (
  <div className="App">
    {props.settingsOpen ? <Settings /> : ''}
    <OperatorPanel />
    <ClientsPanel />
    <MessagePanel />
  </div>
);


const mapStateToProps = state => ({
  settingsOpen: state.ui.settingsOpen,
});

export default connect(mapStateToProps, null)(Application);
