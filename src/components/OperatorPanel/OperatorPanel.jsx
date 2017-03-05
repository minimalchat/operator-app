import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Panel from '../Panel/Panel.jsx';
import TitleBar from '../TitleBar/TitleBar.jsx';
import OperatorProfile from '../OperatorProfile/OperatorProfile.jsx';
import OperatorClientMenu from '../OperatorClientMenu/OperatorClientMenu.jsx';
import OperatorSettingsMenu from '../OperatorSettingsMenu/OperatorSettingsMenu.jsx';

export class OperatorPanelComponent extends Panel {
  // constructor (props) {
  //   super(props);
  //
  //   this.state = {};
  // }

  render () {
    return (
      <div className="panel">
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
  state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const OperatorPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorPanelComponent);

export default OperatorPanel;
