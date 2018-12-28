import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';
import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';
import SettingsPanel from '../SettingsPanel/SettingsPanel.jsx';
import NotificationBar from '../NotificationBar/NotificationBar.jsx';

import './Application.css';


class Application extends Component {
  renderScreen = () => {
    const { settingsOpen } = this.props;
    const { welcomeScreenOpen } = this.props;

    if (welcomeScreenOpen) {
      return <WelcomeScreen />;
    }

    return [
      <OperatorPanel key="0" />,
      settingsOpen ? this.renderSettingsView() : this.renderMainView(),
    ];
  }

  renderSettingsView = () => (
    <div className="App__settingsview" key="1">
      <SettingsPanel />
    </div>
  )

  renderMainView = () => (
    <div className="App__mainview" key="1">
      <NotificationBar />
      <ClientsPanel />
      <MessagePanel />
    </div>
  )

  render () {
    return (
      <div className="App">
        {this.renderScreen()}
      </div>
    );
  }
}

Application.propTypes = {
  welcomeScreenOpen: PropTypes.bool.isRequired,
  settingsOpen: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  welcomeScreenOpen: state.ui.welcomeScreenOpen,
  settingsOpen: state.ui.settingsOpen,
});

const mapDispatchToProps = dispatch => ({ });


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
