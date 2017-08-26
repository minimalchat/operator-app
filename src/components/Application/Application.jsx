import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';
import SettingsPanel from '../SettingsPanel/SettingsPanel.jsx';

import { loadChats } from '../../store/Chat';
import { setConfig } from '../../store/Config'

import './Application.css';


class Application extends Component {
  constructor (props) {
    super(props);

    // Setup our IPC listener
    ipcRenderer.on('config', props.updateConfig);
    ipcRenderer.send('init-config');
  }


  renderSettingsView = () => (
    <div className="App__settingsview">
      <SettingsPanel />
    </div>
  )

  renderMainView = () => (
    <div className="App__mainview">
      <ClientsPanel />
      <MessagePanel />
    </div>
  )

  render () {
    const { settingsOpen } = this.props;

    return (
      <div className="App">
        <OperatorPanel />
        { settingsOpen ? this.renderSettingsView() : this.renderMainView() }
      </div>
    );
  }
}

Application.propTypes = {
  updateConfig: PropTypes.func.isRequired,
  settingsOpen: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  settingsOpen: state.ui.settingsOpen,
});

const mapDispatchToProps = dispatch => ({
  updateConfig: (event, config) => {
    // Set config
    dispatch(setConfig(config));

    // Then reload chats
    loadChats(dispatch, config);
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
