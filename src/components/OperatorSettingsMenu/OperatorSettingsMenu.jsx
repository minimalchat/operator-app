/** OperatorSettingsMenu
  * Displays informaiton about the operator.
  * Might eventually hold a menu settings button?
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './OperatorSettingsStyles.css';

const OperatorSettingsMenu = ({ operatorName }) => (
  <section className="SettingsMenu">
    <div className="Settings__box">
      <img
        className="Settings__avatar"
        alt="billmurray"
        src="http://www.fillmurray.com/58/58"
      />
      <span className="Settings__operator">{operatorName}</span>
    </div>
  </section>
);

OperatorSettingsMenu.propTypes = {
  operatorName: PropTypes.string,
};

OperatorSettingsMenu.defaultProps = {
  operatorName: '',
};

const mapStateToProps = state => ({
  operatorName: state.config.operator,
});

export default connect(
  mapStateToProps,
)(OperatorSettingsMenu);
