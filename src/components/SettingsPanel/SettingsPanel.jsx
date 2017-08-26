import React from 'react';
import '../Toggle/index.css';
import './SettingsPanel.css';
import Toggle from 'react-toggle';
import {connect} from 'react-redux'

const SettingsPanel = (props) => {
  const {notificationsEnabled} = props
  console.log(props)
  return (
    <div className="Settings">
      <h1 className="Settings__header">Settings</h1>

      <section className="Settings__body">
        <div className="Settings__single">
          <Toggle checked={notificationsEnabled} onChange={() => console.log('hi')} />
          <div className="Settings__notification-label">Disable notifications</div>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => ({
  notificationsEnabled: state.config.settings.notificationsEnabled
})


const mapDispatchToProps = (thing) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
