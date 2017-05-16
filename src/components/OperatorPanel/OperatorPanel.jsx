import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSettings } from '../../store/Ui/';

import OperatorClientMenu from '../OperatorClientMenu/OperatorClientMenu.jsx';
import OperatorSettingsMenu from '../OperatorSettingsMenu/OperatorSettingsMenu.jsx';

import './OperatorPanel.css';

const OperatorPanel = props => (
  <div id="OperatorPanel" className="panel">
    <header className="OperatorPanel__header">minimal chat</header>
    <OperatorSettingsMenu />
    <OperatorClientMenu />
    <footer className="OperatorPanel__footer">
      <button
        className="OperatorPanel__settings"
        onClick={() => props.toggleSettings()}
      >
        Settings
      </button>
      <span className="OperatorPanel__madewith">Made with lurv by hoomans</span>
    </footer>
  </div>
);

OperatorPanel.propTypes = {
  toggleSettings: PropTypes.func,
};


const mapDispatchToProps = dispatch => ({
  toggleSettings: () => dispatch(toggleSettings()),
});

export default connect(null, mapDispatchToProps)(OperatorPanel);
