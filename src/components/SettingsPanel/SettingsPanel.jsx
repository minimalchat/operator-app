import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';

import { updateSettings } from '../../store/Config';

import '../Toggle/index.css';
import './SettingsPanel.css';

const SettingsPanel = (props) => {
  const { notificationsEnabled, changeSettings, operator } = props;

  return (
    <div className="Settings">
      <h1 className="Settings__header">Settings</h1>

      <section className="Settings__body">
        <div className="Settings__single">
          <div className="Settings__operator-label">Operator</div>
          <input
            value={operator}
            className="Settings__operator-name"
            placeholder="Name of operator"
            onChange={ev => changeSettings({ operator: ev.currentTarget.value })}
          />
        </div>
        <div className="Settings__single">
          <div className="Settings__notification-label">Disable notifications</div>
          <Toggle
            checked={notificationsEnabled}
            onChange={() => changeSettings({ notificationsEnabled: !notificationsEnabled })}
          />
        </div>
      </section>
    </div>
  );
};

SettingsPanel.propTypes = {
  notificationsEnabled: PropTypes.bool,
  changeSettings: PropTypes.func.isRequired,
  operator: PropTypes.string,
};

const mapStateToProps = state => ({
  notificationsEnabled: state.config.notificationsEnabled,
  operator: state.config.operator,
});

const mapDispatchToProps = dispatch => ({
  changeSettings: newSettings => dispatch(updateSettings(newSettings)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPanel);
