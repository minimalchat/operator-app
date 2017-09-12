import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';
import SettingsPanel from '../SettingsPanel/SettingsPanel.jsx';
import NotificationBar from '../NotificationBar/NotificationBar.jsx';

import './Application.css';


class Application extends Component {
  renderSettingsView = () => (
    <div className="App__settingsview">
      <SettingsPanel />
    </div>
  )

  renderMainView = () => (
    <div className="App__mainview">
      <NotificationBar />
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
  settingsOpen: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  settingsOpen: state.ui.settingsOpen,
});

const mapDispatchToProps = dispatch => ({ });


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
