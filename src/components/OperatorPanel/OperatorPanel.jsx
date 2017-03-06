import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Panel from '../Panel/Panel.jsx';
import TitleBar from '../TitleBar/TitleBar.jsx';
import OperatorProfile from '../OperatorProfile/OperatorProfile.jsx';
import OperatorClientMenu from '../OperatorClientMenu/OperatorClientMenu.jsx';
import OperatorSettingsMenu from '../OperatorSettingsMenu/OperatorSettingsMenu.jsx';

import './OperatorPanel.css';

export class OperatorPanelComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div id="operator-panel" className="panel">
        <div className="top container">
          <TitleBar />
          <OperatorProfile />
          <OperatorClientMenu />
        </div>
        <div className="bottom container">
          <OperatorSettingsMenu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const OperatorPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorPanelComponent);

export default OperatorPanel;
