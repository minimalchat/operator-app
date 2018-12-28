import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';

import Button from '../Button/Button.jsx';
import { updateSettings } from '../../store/Config';

import '../Toggle/index.css';
import './SettingsPanel.css';

const SettingsPanel = (props) => {
  const { notificationsEnabled, changeSettings, operator, disconnect } = props;

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
        <div className="Settings__single">
          <div className="Settings__disconnect-link">
            <Button variant="transparent" onClick={disconnect}>Disconnect from server</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

SettingsPanel.propTypes = {
  notificationsEnabled: PropTypes.bool,
  changeSettings: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
  operator: PropTypes.string,
};

const mapStateToProps = state => ({
  notificationsEnabled: state.config.notificationsEnabled,
  operator: state.config.operator,
});

const mapDispatchToProps = dispatch => ({
  changeSettings: newSettings => dispatch(updateSettings(newSettings)),
  disconnect: () => {
    dispatch(updateSettings({ apiServer: '' });
    // Reload the page
    return window.location.reload();
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPanel);
