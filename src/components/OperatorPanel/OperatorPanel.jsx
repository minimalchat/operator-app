import React from 'react';

/* import TitleBar from '../TitleBar/TitleBar.jsx'; */
import OperatorClientMenu from '../OperatorClientMenu/OperatorClientMenu.jsx';
import OperatorSettingsMenu from '../OperatorSettingsMenu/OperatorSettingsMenu.jsx';
import './OperatorPanel.css';

const OperatorPanel = () => (
  <div id="OperatorPanel" className="panel">
    <header className="OperatorPanel__header">minimal chat</header>
    <OperatorSettingsMenu />
    <OperatorClientMenu />
    <footer className="OperatorPanel__footer"> Made with lurv by hoomans</footer>
  </div>
);

export default OperatorPanel
