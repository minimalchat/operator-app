import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { ipcRenderer } from 'electron';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';
import initSockets from './Sockets.js';
import SettingsPanel from '../SettingsPanel/SettingsPanel.jsx';
import { setConfig } from '../../store/Chat/actions.js';
import './Application.css';


class Application extends Component {
  constructor (props) {
    super(props);

    // Setup our IPC listener
    ipcRenderer.on('config', props.updateConfig);
    ipcRenderer.send('init-config');
  }


  renderSettingsView = () => (
    <div className="App_settingsview">
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
  updateConfig: (event, config) => dispatch(setConfig(config)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
