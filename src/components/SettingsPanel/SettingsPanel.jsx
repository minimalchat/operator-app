import React from 'react';
import '../Toggle/index.css';
import './SettingsPanel.css';
import Toggle from 'react-toggle';

const SettingsPanel = () =>
  <div className="Settings">
    <h1 className="Settings__header">Settings</h1>
    
    <section className="Settings__body">
      <Toggle defaultChecked onChange={() => console.log('hi')} />
    </section>
  </div>;

export default SettingsPanel;
