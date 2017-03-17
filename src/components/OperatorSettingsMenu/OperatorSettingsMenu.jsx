/** OperatorSettingsMenu
  * Displays informaiton about the operator.
  * Might eventually hold a menu settings button?
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleSettings } from '../../store/Ui/';

import './OperatorSettingsStyles.css';


const OperatorSettingsMenu = props => (
  <section className="SettingsMenu">
    <div className="Settings__box">
      <img className="Settings__avatar" alt="billmurray" src="http://www.fillmurray.com/50/50" />
      <span>Steve</span>
      <button onClick={() => props.toggleSettings()}>menu</button>
    </div>
  </section>
);


OperatorSettingsMenu.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  toggleSettings: () => dispatch(toggleSettings()),
});


export default connect(
  null,
  mapDispatchToProps,
)(OperatorSettingsMenu);
