import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';

import { updateSettings } from '../../store/Config';

import '../Toggle/index.css';
import './SettingsPanel.css';

const SettingsPanel = (props) => {
  const { notificationsEnabled, changeSettings } = props;

  return (
    <div className="Settings">
      <h1 className="Settings__header">Settings</h1>

      <section className="Settings__body">
        <div className="Settings__single">
          <Toggle
            checked={notificationsEnabled}
            onChange={() => changeSettings({ notificationsEnabled: !notificationsEnabled })}
          />
          <div className="Settings__notification-label">Disable notifications</div>
        </div>
      </section>
    </div>
  );
};

SettingsPanel.propTypes = {
  notificationsEnabled: PropTypes.bool,
  changeSettings: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  notificationsEnabled: state.config.notificationsEnabled,
});

const mapDispatchToProps = dispatch => ({
  changeSettings: newSettings => dispatch(updateSettings(newSettings)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPanel);
