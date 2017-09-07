import React from 'react';
import '../Toggle/index.css';
import './SettingsPanel.css';
import Toggle from 'react-toggle';
import {connect} from 'react-redux'
import { updateSettings } from '../../store/Config'

const SettingsPanel = (props) => {
  const {notificationsEnabled, updateSettings} = props
  return (
    <div className="Settings">
      <h1 className="Settings__header">Settings</h1>

      <section className="Settings__body">
        <div className="Settings__single">
          <Toggle
            checked={notificationsEnabled}
            onChange={() => updateSettings({notificationsEnabled: !notificationsEnabled})}
          />
          <div className="Settings__notification-label">Disable notifications</div>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => ({
  notificationsEnabled: state.config.notificationsEnabled
})

const mapDispatchToProps = (dispatch) => ({
  updateSettings: (newSettings) => dispatch(updateSettings(newSettings))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
