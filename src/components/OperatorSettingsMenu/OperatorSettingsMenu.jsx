import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OperatorSettingsStyles.css'

// import PanelMenu from '../PanelMenu/PanelMenu.jsx';

export class OperatorSettingsMenuComponent extends Component {
  render () {
    return (
      <section className="SettingsMenu">
        <div className="Settings__box">
          <img className="Settings__avatar" src="http://www.fillmurray.com/50/50" />
          <span>Operator: Steve</span>
        </div>
        <div className="Settings__footer"> Made with lurv by hoomans</div>
      </section>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const OperatorSettingsMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorSettingsMenuComponent);

export default OperatorSettingsMenu;
