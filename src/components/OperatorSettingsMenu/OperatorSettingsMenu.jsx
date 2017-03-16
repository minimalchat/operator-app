import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OperatorSettingsStyles.css';

// import PanelMenu from '../PanelMenu/PanelMenu.jsx';

const OperatorSettingsMenu = () => (
  <section className="SettingsMenu">
    <div className="Settings__box">
      <img className="Settings__avatar" alt="billmurray" src="http://www.fillmurray.com/50/50" />
      <span>Operator: Steve</span>
    </div>
  </section>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorSettingsMenu);
